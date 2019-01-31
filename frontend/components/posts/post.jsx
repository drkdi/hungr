import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updatePost, deletePost} from '../../actions/post_actions';
import EditText from '../posts/forms/edit_text';





const msp = ({entities, session}) => {
   const currentUserID = session[Object.keys(session)[0]];
   const currentUser = entities.users[currentUserID];
   return { currentUser };
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


   
   return (
      <> 
         <div className="individual_post" >
            <p className="post_form_username">{props.post.author_id}</p>

         <div className="post_wrapper">
            <img className="user_icon" src="https://yt3.ggpht.com/a-/AAuE7mD6DYZhbyoY6NJ2eV-lkxkG3KEgAfD8uC2f4w=s900-mo-c-c0xffffffff-rj-k-no" alt="user_icon"/>

            {content}

               <p className="post_body">{props.post.body}</p>


            
            
            {/* <button onClick={(post) => {props.updatePost(post)}} className="text_update_button">Update</button> */}
           
           
            {/* FIX THIS */}
           
               <div className="form_buttons">
               <button className="post_gear"><i className="fas fa-cog"></i></button>
         
                  <button onClick={EditText} className="form_cancel_button">Edit</button>

                  <button onClick={() => { props.deletePost(props.post.id) }} className="form_post_button">Delete</button>
               </div>
               
               
               
               
            </div>
         </div>
            
      </>
   )
}

export default connect(msp, mdp)(Post);