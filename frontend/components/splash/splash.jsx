import { runInContext } from "vm";
import { login } from "../../actions/session_actions";
import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import { SectionsContainer, Section } from 'react-fullpage';

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

      let options = {
         activeClass: 'active',
         sectionClassName: 'section',
         anchors: ['#/', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix'],
         scrollBar: false,
         className: 'SectionContainer', // the class name for the section container
         navigation: false,
         delay: 1000, // the scroll animation speed
         verticalAlign: false,
         sectionPaddingTop: '0', // the section top padding
         sectionPaddingBottom: '0', // the section bottom padding
         arrowNavigation: true
         
      };



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
            <Link to="/sectionTwo" className="splash_anchor_bottom twoSecPopup fadeInUp">
               <div className="splash_anchor_bottom_text">What is Hungr?</div>
            </Link>

      </div>
         <div>


            <SectionsContainer className="container" {...options}>
               <Section color="green">
                  <h1>Tumblr is so easy to use that it’s hard to explain.</h1>
                  We made it really, really simple for people to make a blog and put whatever they want on it. Stories, photos, GIFs, TV shows, links, quips, dumb jokes, smart jokes, Spotify tracks, mp3s, videos, fashion, art, deep stuff. Tumblr is 461 million different blogs, filled with literally whatever.
               </Section>


               <Section className="custom-section" verticalAlign="true" color="purple">
                  <h1>Tumblr is blogs.</h1>
                  Turns out that when you make it easy to create interesting things, that’s exactly what people do. All those great, random blogs your friends send you, those are Tumblr blogs. We’ll help you find and follow blogs like that, and we’ll help other people find and follow yours.
               </Section>
               
               <Section color="blue">You already know how this works.
Once you follow a blog, all of its posts show up in your dashboard, just like you’d expect. See something great? Reblog it to your own blog. Add commentary if you like. Make it your own. Other people will do the same to your posts. That’s how you meet people here.
               </Section>

               <Section color="orange">Seriously, put anything you want here.
Seven post types to get you started. Your brain can do the rest. This thing is yours. Use it however you like.
               </Section>


               <Section color="yellow">
               </Section>

            </SectionsContainer>
           
           
            {/* <ReactFullpage.Wrapper>
               <div className="section">
                  <p>Section 1 (welcome to fullpage.js)</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                     Click me to move down
            </button>
               </div>
               <div className="section">
                  <p>Section 2</p>
               </div>
            </ReactFullpage.Wrapper> */}

         </div>
      </>
   )
   }


}  

export default Splash;

