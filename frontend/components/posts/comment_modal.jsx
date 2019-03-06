import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from '../posts/forms/comment_form';
import Comment from './comment';
import { fetchComment, fetchComments } from '../../actions/comment_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { cpus } from 'os';

const msp = ({ entities, session }, ownProps) => {
   // debugger
   let comments = entities.comments;
   return {comments, entities};
};

const mdp = dispatch => {
   return {
      createComment: id => dispatch(createComment(id)),
      deleteComment: id => dispatch(deleteComment(id)),
      fetchComments: () => dispatch(fetchComments()),
      
   };
};

class CommentModal extends Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      // need to add custom route to get only comments for this specific post's author
      this.props.fetchComments();
   }

   render() {
      // debugger
      let commentArr;
      commentArr = [];
      // if (Object.keys(this.props.comments).length === 0) {
      if (this.props.comments.length === 0) {
         commentArr = [];
      }
      else {
         // commentArr = this.props.comments.map(comment => {
            //    return <Comment key={comment.id} comment={comment} className="comment" />
            // })

            commentArr = Object.keys(this.props.comments).map(comment => {
               return (
                  // <div className="commentText">
                  // {/* <p className="commentText">comment is: {this.props.comments[comment].body}</p> */}
                  
                  <Comment key={this.props.comments[comment].id} comment={this.props.comments[comment]} author={this.props.entities.users[this.props.comments[comment].author_id]} post_id={this.props.entities.comments[comment].post_id} />
                  
                  )
            }).filter(comment => (comment.props.comment.post_id === this.props.post.id)).reverse();
            // not comments post_id , changing with ever different comment
         // debugger            
}

// author_id={this.props.entities.users[this.props.comments[comment].author_id].username}
           

         // let currPostid = this.props.post.id
         //    commentArr = commentArr.filter(comment => (comment.props.post_id === currPostid) );
         //  debugger
      // need to filter comments based on postId, (this post has these specific comments)
      
      let zeroPosts;
      if (commentArr.length !== 0) {
         zeroPosts = (<button type="button" className="comments_counter_outer" data-toggle="modal" data-target={`#myModal-comment-${this.props.post.id}`}>{commentArr.length} notes</button>)
      }
      else {
         zeroPosts = []
      }



      return (

         <>
            {zeroPosts}

            <button type="button" className="comment_modal" data-toggle="modal" data-target={`#myModal-comment-${this.props.post.id}`} ><i className="far fa-comment"></i></button>

            <div className="modal fade" id={`myModal-comment-${this.props.post.id}`} role="dialog">
               <div className="modal-dialog">

                  <div className="modal-content">
                     <div className="modal-header">
                        <p className="comments_counter">{commentArr.length} notes</p>

                        <h4 className="comment-modal-list">{commentArr}</h4>
                        
                        {/* <h4 className="modal-title">comment header</h4> */}
                           <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                     </div>
                     
                     <div className="modal-body">
                        <CommentForm post={this.props.post} />
                     </div>
                    
                  </div>

               </div>
            </div>
         </>
      )
   }

}

export default connect(msp, mdp)(CommentModal);



