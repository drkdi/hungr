import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updatePost, deletePost} from '../../actions/post_actions';
import EditText from '../posts/forms/edit_text';

const msp = (state) => {
   return {}
};

const mdp = dispatch => {
   return {
      deletePost: id => dispatch(deletePost(id)),
      updatePost: post => dispatch(updatePost(post)),}
};



const Post = (props) => {
   // debugger
   // if title="video"
   // if title="image"
   // else -> {props.post.title} {props.post.body}
   let content;

   if (props.post.title === "image") {
      content = ( 
         <img className="index_image_post" src={props.post.media} />
      )

   }
   else if (props.post.title === "video") {
       content = (
         <video controls className="index_video_post" src={props.post.media} />        
      )
    }
    
   else if (props.post.title === "audio") {
       content = (
         <audio controls className="index_audio_post" src={props.post.media} />       
      )
    }

   else { 
      content = (
         <p className="quote_post_title">{props.post.title}</p>
      )
   }

   // debugger


   return (
      <> 
         <div className="individual_post" >

         <div className="post_body">
            <img className="user_icon" src="https://yt3.ggpht.com/a-/AAuE7mD6DYZhbyoY6NJ2eV-lkxkG3KEgAfD8uC2f4w=s900-mo-c-c0xffffffff-rj-k-no" alt="user_icon"/>



            <p>{props.post.body}</p>


            {content}

            
            <button onClick={() => { props.deletePost(props.post.id) }} className="text_delete_button">Delete</button>
            
            {/* <button onClick={(post) => {props.updatePost(post)}} className="text_update_button">Update</button> */}
           
           
            {/* FIX THIS */}
            <button onClick={EditText}>Update</button>

            
            </div>
         </div>
            
      </>
   )
}

export default connect(msp, mdp)(Post);