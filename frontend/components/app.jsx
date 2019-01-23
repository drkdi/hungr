import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {
   Route,
} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container.jsx';
import LogInFormContainer from './session_form/login_form_container.jsx';


const App = () => (
   <div>
      <h1>Hungr</h1>
      <GreetingContainer/>

      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
   </div>
);

export default App;
