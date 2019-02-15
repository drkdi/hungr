// import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/post_actions';
// import { merge, assign } from 'lodash';

// let newState;
// const postReducer = (state = {}, action) => {
//    Object.freeze(state);
//    switch (action.type) {
//       case RECEIVE_POSTS:
//          return merge({}, state, action.posts);
//       case RECEIVE_POST:
//          // debugger
//          //
//          // if action.post


//          // return merge({}, state, action.post);
//          return merge({}, state, action.post);
//       // newState = merge({}, state);
//       // newState = mergeWith(newState, action.post);
//       // if action.post
//       // debugger

//       // return newState;
//       // return mergeWith(state, action.posts);
//       case REMOVE_POST:
//          newState = merge({}, state);
//          delete newState[action.postId];
//          return newState;
//       default:
//          return state;
//    }
// };
// export default postReducer;