import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updatePost, deletePost} from '../../actions/post_actions';
import EditText from '../posts/forms/edit_text';
import { fetchUser } from '../../actions/user_actions';
import { createLike, removeLike} from '../../actions/like_actions';

const msp = ({entities, session}, ownProps) => {
   const currentUserID = ownProps.post.author_id;
   const currentUser = entities.users[currentUserID] || {username: ""};

   const post = ownProps.post;
   return { currentUser, post};


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
      
      super(props);
      this.state = {
         like: "",
      };
      this.handleLike = this.handleLike.bind(this);
      
      // debugger
   }


   componentDidMount() {
      this.props.fetchUser(this.props.post.author_id) 
   }
   
   handleLike(e) {
      e.preventDefault();
      if (this.state.like) {
         this.setState({like: ""});
      }
      else {
         this.setState({ like: true});
      }
   }

   render() {
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
         <a href="{this.props.post.body}"></a>
      )
   }


   else {
      content = (
         <p className="quote_post_title">{this.props.post.title}</p>
      )
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
         

                     <button onClick={this.handleLike} className="like_button" style={this.state.like ? {color: "red"} : {color: "gray"} } >
                        <i className="fas fa-heart"></i>
                     </button>


                  <button onClick={EditText} className="form_cancel_button">Edit</button>

                  <button onClick={() => { this.props.deletePost(this.props.post.id) }} className="form_post_button">Delete</button>
               </div>

            </div>
         </div>
            
      </>
   )
   }
}

export default connect(msp, mdp)(Post);