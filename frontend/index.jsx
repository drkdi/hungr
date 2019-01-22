import React from 'react';
import ReactDOM from 'react-dom';
// import root from './components/root';
import configureStore from './store/store';
// import Root from './components/root';

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
   const store = configureStore();



   window.getState = store.getState;
   window.dispatch = store.dispatch; // just for testing!
   window.login = login;
   window.signup = signup;
   window.receiveCurrentUser = receiveCurrentUser;
   
   const root = document.getElementById('root');
   // ReactDOM.render(<h1>Welcome to hungr</h1>, root);
   ReactDOM.render(<Root store={store} />, root);
   alert("hi")
});