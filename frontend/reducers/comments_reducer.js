import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { merge, assign } from 'lodash';

let newState;
const commentsReducer = (state = {}, action) => {
   Object.freeze(state);
   switch (action.type) {
      case RECEIVE_COMMENTS:
         return merge({}, state, action.comments);
      case RECEIVE_COMMENT:

         return merge({}, state, action.post);
      case REMOVE_COMMENT:
         newState = merge({}, state);
         delete newState[action.commentId];
         return newState;
      default:
         return state;
   }
};
export default commentsReducer;