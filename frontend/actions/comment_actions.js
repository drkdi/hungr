import * as APIUtil from '../util/comment_util';
import { receivePost } from './post_actions';

export const receiveComment = comment => dispatch => {
   // debugger
   return APIUtil.createComment(comment).then(
      post => dispatch(receivePost(post))
   );
};

export const removeComment = commentId => dispatch => {
   // debugger
   return APIUtil.removeComment(commentId).then(
      post => dispatch(receivePost(post))
   );
};
