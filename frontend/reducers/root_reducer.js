import { combineReducers } from 'redux';

import session from './session_reducer';
import entities from './entities_reducer';
import errors from './errors_reducer';

export default combineReducers({
   session,
   entities,
   errors
})