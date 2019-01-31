import * as APIUtil from '../util/user_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
   return { type: RECEIVE_USER,
      user,}
};


export const fetchUser = userId => dispatch => (
   APIUtil.fetchUser(userId).then(
      user => dispatch(receiveUser(user)),
   )
);

export const updateUser = (userId, data) => dispatch => (
   APIUtil.updateUser(userId, data).then(
      user => dispatch(receiveCurrentUser(user)),
   )
);
