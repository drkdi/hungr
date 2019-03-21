import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updatePost, deletePost} from '../../actions/post_actions';
import EditText from '../posts/forms/edit_text';
import { fetchUser } from '../../actions/user_actions';

import CommentForm from '../posts/forms/comment_form';
import Comment from './comment';
import {fetchComment, fetchComments} from '../../actions/comment_actions';
import {createComment, deleteComment} from '../../actions/comment_actions';

import { createLike, removeLike} from '../../actions/like_actions';

import CommentModal from './comment_modal';
import EditModal from './forms/edit_modal';


const msp = ({entities, session}, ownProps) => {
   const currentUserID = ownProps.post.author_id;
   const currentUser = entities.users[currentUserID] || {username: ""};
   const sessionUser = session;
   const post = ownProps.post;
   return { currentUser, post, sessionUser};
   };

const mdp = dispatch => {
   return {
      deletePost: id => dispatch(deletePost(id)),
      updatePost: post => dispatch(updatePost(post)),
      fetchUser: userId => dispatch(fetchUser(userId)),
      like: postId => dispatch(createLike(postId)),
      unlike: postId => dispatch(removeLike(postId)),
   }
};


class Post extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hiddenEdit: true,
      };
   }

   componentDidMount() {
      this.props.fetchUser(this.props.post.author_id);
   }

   render() {
      const { like, unlike} = this.props;
      let content;

      if (this.props.post.title === "image") {
         content = (
            <img className="index_image_post" src={this.props.post.media} />
         )

      }
      else if (this.props.post.title === "video") {
         content = (
            <video controls className="index_video_post" src={this.props.post.media} />
         )
      }

      else if (this.props.post.title === "audio") {
         content = (
            <audio controls className="index_audio_post" src={this.props.post.media} />
         )
      }

      else if (this.props.post.title === "link") {
         content = (
            <a href="{this.props.post.body}" className="index_link"></a>
         )
      }

      else {
         content = (
            <p className="quote_post_title">{this.props.post.title}</p>
         )
      }


   let editForm
   // debugger
      (this.props.post.author_id === this.props.sessionUser.id) ? (
      (editForm) = (<>
            {/* <button onClick={() => {}} className="form_cancel_button"><i class="far fa-trash-alt"></i>delete</button> */}
            <button onClick={() => { this.props.deletePost(this.props.post.id) }} className="delete_button hoverUp"><i className="far fa-trash-alt" title="delete"></i></button>
            < EditModal post={this.props.post} post_id={this.props.post_id} title="edit"/>
         </>
      )) : (
      (editForm) = (<> </>)
      )

   let likeBool 
   let found = false;
   
   if (this.props.post.likes){
      for (let i = 0; i < this.props.post.likes.length; i++) {
         if (this.props.post.likes[i].author_id === this.props.sessionUser.id) {
            found = true;
            break;
         }
      }
         (found) ? (
            // likes refreshing but not unlikes, even though it works, make found, likebool a function called on mount
            (likeBool) = (<button onClick={() => { unlike(this.props.post.likes[0].id) }} className="like_button hoverUp">
                  <i className="fas fa-heart" style={{color: "red"}} title="like"></i>
            </button>
            )
         ) : (
               (likeBool) = (<button onClick={() => { like(this.props.post.id) }} className="like_button hoverUp">
                  <i className="far fa-heart" style={{ color: "gray" }} title="like"></i>
            </button>)
         )

         }


      if (!this.props.currentUser.profile_pic_url) {
         this.props.currentUser.profile_pic_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTjtPQ8LBaJLXxGwFuDi6jPWZQq3nszuKi8HHiRn0yT4xUGoPDw";
      } 


      let modalPost = this.props.post;


      {/* NEED TO QUERY DB FOR SPECIFIC COMMENTS */}

      return (
      <> 
         <div className="individual_post" >
            <p className="post_form_username">{this.props.currentUser.username}</p>
            <div className="post_wrapper">
               <img className="user_icon" src={this.props.currentUser.profile_pic_url} alt="user_icon" />
               {content}
               <p className="post_body">{this.props.post.body}</p>
               <div className="form_buttons">
               {editForm}
               {likeBool}
               < CommentModal id={this.props.post_id} post={modalPost} className="comment_modal" post_id={this.props.post_id}/>
               </div>
            </div>
         </div>    
      </>
   )}}

export default connect(msp, mdp)(Post);