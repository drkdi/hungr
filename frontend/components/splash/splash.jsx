import { runInContext } from "vm";
import { login } from "../../actions/session_actions";
import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
// import LoginFormContainer from '../session_form/login_form_container';



class Splash extends React.Component {
   constructor(props) {
      super(props);
      this.handleGuest = this.handleGuest.bind(this)
      // this.loginSpeed = 80;
      this.handleChange = this.handleChange.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);



   }

      handleChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }

      handleGuest(e) {
         e.preventDefault();
         this.demoLogin("username", "Guy Fieri", (
               () => this.demoLogin("password", 'flavortown', (
                  () => this.props.processForm(this.state)
               ))
         ));
      }

      handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
   }


      demoLogin(field, DemoUser, cb) {
      let textToType = "";
      const typing = () => {
         textToType = DemoUser.substring(0, textToType.length + 1);
         this.setState({ [field]: textToType });
         if (textToType.length === DemoUser.length) {
               setTimeout(() => cb(), this.loginSpeed);
         } else {
               setTimeout(() => typing(), this.loginSpeed);
         }
      };
      typing();
   }


   render() {
      
   return (


      <div className="splash_form" onSubmit={(e) => this.handleSubmit(e)}>



         <a href="#/" className="rainbow">h</a>

         <img className="logo" src="https://i.imgur.com/RjrJpb7.png" alt="hungr_logo"/>

         <p className="phrase1">Come for what you crave.</p>
         <p className="phrase2">Stay for what you make.</p>
         
         <Route path="/signup" component={SignUpFormContainer} />
         <br/>


         {/* dont need cause login redirects to login page */}
         {/* <Route path='/login' component={LoginFormContainer} /> */}
            <Link to="/signup">
               <button className="signup_button">Get Started</button>
            </Link>


            <Link to="/login" >
               <button className="login_button">Log In</button>
            </Link >


         {/* show actual components */}




         {/* <button onClick={props.demo} className="demo_login">Demo Login</button> */}

         <button class="demo_button" onClick={(e) => this.handleGuest(e)}>Try a Demo</button>

         
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

