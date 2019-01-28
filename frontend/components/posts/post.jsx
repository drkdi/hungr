import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updatePost, deletePost} from '../../actions/post_actions';

const msp = (state) => {
   debugger
   return {}
};

const mdp = dispatch => {
   debugger
   return {
      deletePost: id => dispatch(deletePost(id)),
   updatePost: post => dispatch(updatePost(post)),}
};



const Post = (props) => {
   
   debugger

   return (
      <> 
         <div className="individual_post" >
            <img className="post_image" src="https://i.kym-cdn.com/entries/icons/mobile/000/025/817/Screen_Shot_2018-03-30_at_11.34.27_AM.jpg" alt="placeholder"/>
            <p>{props.post.title}</p>
            <p>{props.post.body}</p>

            <button onClick={() => {props.deletePost(props.post.id)}}>Delete</button>

         </div>
            
      </>
   )
}

export default connect(msp, mdp)(Post);