import React, { Component } from 'react';

import { connect } from 'react-redux';

import {createComment, deleteComment } from '../../actions/comment_actions';

const msp = ({entities, session}, ownProps) => {
   // debugger
   return {};
};

const mdp = dispatch => {
   return {
      deleteComment: id => dispatch(deleteComment(id)),
   };
};

class Comment extends Component {
   constructor(props) {
      super(props);
   }

   // componentDidMount() {

   // }

   render() {
      // debugger
      return (
         <>
         <p className="commentText">{this.props.comment.body}</p>
         <button onClick={() => {this.props.deleteComment(this.props.comment.id)}}>Delete</button>
         {/* need to refresh after deleting */}
         </>
      )
   }

}

export default connect(msp, mdp)(Comment);