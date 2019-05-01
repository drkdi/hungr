import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUpFormContainer from "./session_form/signup_form_container.jsx";
import LogInFormContainer from "./session_form/login_form_container.jsx";
import NavContainer from "./nav/nav_container";
import SplashContainer from "./splash/splash_container";
import { ProtectedRoute, AuthRoute } from "../util/route_util.jsx";
import Dashboard from "./dashboard/dashboard";
import Profile from "./posts/profile";
import Liked from "./posts/liked";
import Search from "./posts/search";

const App = () => (
  <>
    <div>
      <ProtectedRoute path="/" component={NavContainer} />
      <Switch>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/liked" component={Liked} />
        <ProtectedRoute path="/search/" component={Search} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute path="/" component={SplashContainer} />
      </Switch>
    </div>
  </>
);

export default App;
