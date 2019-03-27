import { runInContext } from "vm";
import { login } from "../../actions/session_actions";
import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import FullPageScroll from './full_page_scroll';
import ReactFullpage from '@fullpage/react-fullpage';

// import ReactDOM from 'react-dom';

// import ReactFullpage from '@fullpage/react-fullpage';



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
     
         <>
      
      <div className="splash_form" onSubmit={(e) => this.handleSubmit(e)} style={wallpaperStyle}>

         <a href="#/" className="rainbow">h</a>

            <img className="logo animated fadeInDown" src="https://i.imgur.com/RjrJpb7.png" alt="hungr_logo"/>

         <p className="phrase1 animated fadeInDown">Come for what you crave.</p>
         <p className="phrase2 animated fadeInDown">Stay because I need a job P L E A S E</p>
         
         <Route path="/signup" component={SignUpFormContainer} />
         <br/>

         {/* dont need cause login redirects to login page */}
         {/* <Route path='/login' component={LoginFormContainer} /> */}

         {(LoginOrSignup === "/" || LoginOrSignup === "/login" ) ?
         (
         <ul>
         <Link to="/signup">
                <button className="signup_button animated fadeIn">Get Started</button>
         </Link>
         <br/>

         <Link to="/login" >
               <button className="login_button animated fadeIn">Log In</button>
         </Link >
         
         </ul>
         ) : null
         }
         
         {/* show actual components */}



         {/* <button onClick={props.demo} className="demo_login">Demo Login</button> */}


         
         <br/>
            <div className="profile_links">
            <a href="https://github.com/drkdi">
                  <img className="git-img animated fadeIn" src="https://i.imgur.com/vpbjsvX.png"/>
            </a>
            <a href="https://www.linkedin.com/in/daiderek/">
                  <img className="linkedin-img animated fadeIn" src="https://i.imgur.com/aQVis67.png"/>
            </a>
         </div>


            <div className="splash_anchor_bottom twoSecPopup fadeInUp">
                  
                  <div className="splash_anchor_bottom_text">
                  <i className="fas fa-angle-down leftish"></i>

                     What is Hungr?   

                  <i className="fas fa-angle-down rightish"></i>
         
                  </div>

            </div>


          </div>

         {/* <FullPageScroll /> */}







         <div>

            
      <FullPageScroll />


           


         </div>
      </>
   )
   }


}  

export default Splash;

