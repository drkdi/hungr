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
   

   return (
      <> 
         <div className="individual_post" >
            <img className="post_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91eBclh2ZWqgAd6yp_f1gk_pWG8GN6Pnn-a4S26fPSTx3QLibKg" alt="placeholder"/>
            <p>{props.post.title}</p>
            <p>{props.post.body}</p>

            <button onClick={() => { props.deletePost(props.post.id) }} className="text_delete_button">Delete</button>
            
            {/* <button onClick={(post) => {props.updatePost(post)}} className="text_update_button">Update</button> */}
           
           
            {/* FIX THIS */}
            <button onClick={EditText}>Update</button>

            

         </div>
            
      </>
   )
}

export default connect(msp, mdp)(Post);