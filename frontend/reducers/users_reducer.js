import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
   Object.freeze(state);
   switch (action.type) {
      case RECEIVE_CURRENT_USER:
         return merge({}, state, { [action.currentUser.id]: action.currentUser });
      
     case RECEIVE_USER:
         let newState = merge({}, state);
         // const author_id = Object.values(action.user)[0];
         // if (state[author_id]) {
         //    delete newState[author_id];
         // }
         return merge({}, newState, { [action.user.id]: action.user });
      default:
         return state;
   }
};

export default usersReducer;



