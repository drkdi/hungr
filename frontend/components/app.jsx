import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route, Switch} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container.jsx';
import LogInFormContainer from './session_form/login_form_container.jsx';
import NavContainer from './nav/nav_container';
import SplashContainer from './splash/splash_container';
import {ProtectedRoute, AuthRoute} from '../util/route_util.jsx';

const App = () => (
   <>
   <div>


      {/* <Route path="/splash" component={SplashContainer} /> */}
      <Switch>

         <Route exact path="/login" component={LogInFormContainer} />
         <Route exact path="/dashboard" component={NavContainer} />
         <AuthRoute path="/" component={SplashContainer} />

      </Switch>
      {/* <GreetingContainer/> */}
      {/* <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} /> */}

   </div>
   </>
);

export default App;
