import { runInContext } from "vm";

import { login } from "../../actions/session_actions";

import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

const Splash = (props) => {

   const signup = (

         <Link to="/signup">
            <button className="signup">Get Started</button>
         </Link>

   )

   const login = (
         <Link to = "/login" >
            <button className="login">Log In</button>
         </Link >
   )

   handleGuest(e) {
        e.preventDefault();
        this.demoLogin("username", "SerenaWilliams", (
            () => this.demoLogin("password", 'hopetheyhireme', (
                () => this.props.processForm(this.state)
            ))
        ));
    }


   return (
      <div className="splash_form">
         <img className="logo" src="https://i.imgur.com/RjrJpb7.png" alt="hungr_logo"/>

         <p>Come for what you crave.</p>
         <p>Stay for what you make.</p>
         

         {/* buttons to log in */}
         {signup}
         {login}

         {/* show actual components */}
         <Route path="/signup" component={SignUpFormContainer} />
         <Route path='/login' component={LoginFormContainer} />



         {/* <button onClick={props.demo} className="demo_login">Demo Login</button> */}
         {/* <button onClick={(e) => this.handleGuest(e)}>Try a Demo</button> */}
         
         
         <br/>
         <a href="https://github.com/drkdi">Git</a>
         <a href="https://www.linkedin.com/in/daiderek/">LinkedIn</a>
      
      
      </div>

   )


}

export default Splash;