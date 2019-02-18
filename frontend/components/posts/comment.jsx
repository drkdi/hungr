import React, { Component } from 'react';

import { connect } from 'react-redux';

import {createComment, deleteComment } from '../../actions/comment_actions';

const msp = ({entities, session}, ownProps) => {
   debugger
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

   componentDidMount() {

   }

   render() {

   }

}

export default connect(msp, mdp)(Comment);