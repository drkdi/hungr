import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updatePost, deletePost} from '../../actions/post_actions';

const msp = (state) => ({
   state
});

const mdp = dispatch => ({
   deletePost: id => dispatch(deletePost(id)),
   updatePost: post => dispatch(updatePost(post)),
});

const Post = ({post}) => {
   return (
      <> 
         <div className="individual_post" >
            <p>{post.title}</p>
            <p>{post.body}</p>
         </div>
            
      </>
   )
}

export default connect(msp, mdp)(Post);