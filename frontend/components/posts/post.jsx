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
   // debugger
   const currentUserID = ownProps.post.author_id;
   const currentUser = entities.users[currentUserID] || {username: ""};
   const sessionUser = session;
   const post = ownProps.post;
   return { currentUser, post, sessionUser};
   
   // this.props.currentUser is post's user
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
      // debugger
      super(props);
      // this.handleLike = this.handleLike.bind(this);
         }


   componentDidMount() {
      this.props.fetchUser(this.props.post.author_id);
   }


   render() {
      // debugger
      const { like, unlike} = this.props;

      // debugger
         // console.log(this.props)

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
      (this.props.post.author_id === this.props.sessionUser.id) ? (
      (editForm) = (<>
            {/* <button onClick={() => {}} className="form_cancel_button"><i class="far fa-trash-alt"></i>delete</button> */}
            <button onClick={() => { this.props.deletePost(this.props.post.id) }} className="delete_button"><i className="far fa-trash-alt"></i></button>
            < EditModal post={this.props.post}  />
       
       
         </>
      )) : (
      (editForm) = (<> </>)
      )

      {/* if post.likes.include(currentUser) 
         display delete button
         else
         display like button
         style={this.state.like ? { color: "red" } : { color: "gray" }
         */}

   let likeBool 
   let found = false;
   
      for (let i = 0; i < this.props.post.likes.length; i++) {
         if (this.props.post.likes[i].author_id === this.props.sessionUser.id) {
            found = true;
            break;
         }

      }
      
         (found) ? (
            // likes refreshing but not unlikes, even though it works, make found, likebool a function called on mount
         (likeBool) = (<button onClick={() => { unlike(this.props.post.likes[0].id) }} className="like_button">
                  <i className="fas fa-heart" style={{color: "red"}}></i>
            </button>
            )
         ) : (
         (likeBool) = (<button onClick={() => { like(this.props.post.id) }} className="like_button">
                  <i className="far fa-heart" style={{ color: "gray" }}></i>
            </button>)
         )


      if (!this.props.currentUser.profile_pic_url) {
         this.props.currentUser.profile_pic_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTjtPQ8LBaJLXxGwFuDi6jPWZQq3nszuKi8HHiRn0yT4xUGoPDw";
      } 



      return (
      
      <> 
         <div className="individual_post" >
         <p className="post_form_username">{this.props.currentUser.username}</p>

         <div className="post_wrapper">

                  <img className="user_icon" src={this.props.currentUser.profile_pic_url} alt="user_icon" />
            {content}

               <p className="post_body">{this.props.post.body}</p>
            
            {/* <button onClick={(post) => {props.updatePost(post)}} className="text_update_button">Update</button> */}
           
           
            {/* FIX THIS */}
           
               <div className="form_buttons">
         

                     {/* <button onClick={this.handleLike} className="like_button" style={this.state.like ? {color: "red"} : {color: "gray"} } >
                        <i className="fas fa-heart"></i>
                     </button> */}

                     {editForm}
                     {likeBool}


{/* NEED TO QUERY DB FOR SPECIFIC COMMENTS */}

                     < CommentModal post={this.props.post} className="comment_modal" post_id={this.props.post_id}/>
                     {/* <button onClick={() => { this.props.createComment({body: "banana", }) }} className="create_comment_button">CreateComment</button> */}



               </div>

            </div>
         </div>
            
      </>
   )
   }
}

export default connect(msp, mdp)(Post);