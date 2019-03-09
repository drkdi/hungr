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
      // debugger
      let picBool;

      if (this.props.author) {
         picBool = (
            <>
            <img src={this.props.author.profile_pic_url} className="commentAuthorImg" alt="comment_author" />
            <ul className="commentBox">
               {picBool}
               <li className="commentBoxText">
                  <div className="commentAuthor">{this.props.author.username}</div>
                  <p className="commentText">{this.props.comment.body}</p>
               </li>
            </ul>
            </>
            )
      }
      else {
         picBool = <> </>
      }

      return (
         <>
            {picBool}

            <button className="commentDelete" onClick={() => {
               this.props.deleteComment(this.props.comment.id).then(window.location.reload()) }}><i className="far fa-trash-alt" title="comment"></i></button>
         {/* need to refresh after deleting */}
         </>
      )
   }

}

export default connect(msp, mdp)(Comment);