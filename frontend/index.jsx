import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, receiveCurrentUser, signup } from './actions/session_actions'; ///for testing


// document.addEventListener('DOMContentLoaded', () => {
//    const root = document.getElementById('root');
//    let preloadedState = undefined;
//    if (window.currentUser) {
//       preloadedState = {
//          session: {
//             currentUser: window.currentUser
//          }
//       };
//    }
//    const store = createStore(preloadedState);

//    ReactDOM.render(<Root store={store} />, root);
// })

document.addEventListener('DOMContentLoaded', () => {
   let store = configureStore();

   if (window.currentUser) {
      const preloadedState = {
         entities: {
            users: { [window.currentUser.id]: window.currentUser }
         },
         session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
   } else {
      store = configureStore();
   }

   window.getState = store.getState;

   // window.dispatch = store.dispatch; // just for testing!
   // window.login = login;
   // window.signup = signup;
   // window.receiveCurrentUser = receiveCurrentUser;
   
   const root = document.getElementById('root');
   // ReactDOM.render(<h1>Welcome to hungr</h1>, root);
   ReactDOM.render(<Root store={store} />, root);
   // alert("hi")
});