import { runInContext } from "vm";
import { login } from "../../actions/session_actions";
import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
// import LoginFormContainer from '../session_form/login_form_container';



class Splash extends React.Component {
   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

   }

      handleChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }


      handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
   }

  


   render() {
      
      const LoginOrSignup = this.props.location.pathname;

      const wallpaperStyle = {
         margin: 0,
         background: `url(${window.splashUrl})`,
         height: "100vh",
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         

      };


   return (
     
         
      
      <div className="splash_form" onSubmit={(e) => this.handleSubmit(e)} style={wallpaperStyle}>

         <a href="#/" className="rainbow">h</a>

         <img className="logo" src="https://i.imgur.com/RjrJpb7.png" alt="hungr_logo"/>

         <p className="phrase1">Come for what you crave.</p>
         <p className="phrase2">Stay because I need a job P L E A S E</p>
         
         <Route path="/signup" component={SignUpFormContainer} />
         <br/>

         {/* dont need cause login redirects to login page */}
         {/* <Route path='/login' component={LoginFormContainer} /> */}

         {(LoginOrSignup === "/" || LoginOrSignup === "/login" ) ?
         (
         <ul>
         <Link to="/signup">
            <button className="signup_button">Get Started</button>
         </Link>
         <br/>

         <Link to="/login" >
            <button className="login_button">Log In</button>
         </Link >
         
         </ul>
         ) : null
         }
         
         {/* show actual components */}



         {/* <button onClick={props.demo} className="demo_login">Demo Login</button> */}


         
         <br/>
            <div className="profile_links">
            <a href="https://github.com/drkdi">
               <img className="git-img" src="https://i.imgur.com/vpbjsvX.png"/>
            </a>
            <a href="https://www.linkedin.com/in/daiderek/">
               <img className="linkedin-img" src="https://i.imgur.com/aQVis67.png"/>
            </a>
         </div>
      
      </div>
   )
   }


}

export default Splash;

