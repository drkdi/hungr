import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {
   Route,
} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container.jsx';
import LogInFormContainer from './session_form/login_form_container.jsx';


const App = () => (
   <div class="form">
      <p className="logo1">Hungr</p>
      
      <div className="greeting_container">
         <GreetingContainer/>
      </div>
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
      {/* <img className="hero-img" src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/> */}

   </div>
);

export default App;
