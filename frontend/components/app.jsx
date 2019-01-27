import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route, Switch} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container.jsx';
import LogInFormContainer from './session_form/login_form_container.jsx';
import NavContainer from './nav/nav_container';
import SplashContainer from './splash/splash_container';
import {ProtectedRoute, AuthRoute} from '../util/route_util.jsx';
import Dashboard from './dashboard/dashboard';

const App = () => (
   <>
   <div>

      <ProtectedRoute path="/" component={NavContainer} />


      {/* <Route path="/splash" component={SplashContainer} /> */}
      <Switch>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute path="/" component={SplashContainer} />

      </Switch>
      {/* <GreetingContainer/> */}
      {/* <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} /> */}

   </div>
   </>
);

export default App;
