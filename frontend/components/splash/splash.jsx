import { login } from "../../actions/session_actions";
import React from "react";
import { Link, Route } from "react-router-dom";
import SignUpFormContainer from "../session_form/signup_form_container";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

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

  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  render() {
    const LoginOrSignup = this.props.location.pathname;

    const wallpaperStyle = {
      margin: 0,
      background: `url(${window.splashUrl})`,
      height: "100vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };

    return (
      <ReactFullpage
        navigation
        controlArrows="true"
        sectionsColor={["white", "#00cf35", "#7c5cff", "#001935", "#001935"]}
        navigationPosition="left"
        scrollOverflow={true}
        slidesNavigation="true"
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <div
                  className="splash_form"
                  onSubmit={e => this.handleSubmit(e)}
                  style={wallpaperStyle}
                >
                  <a href="#/" className="rainbow">
                    h
                  </a>
                  <img
                    className="logo animated fadeInDown"
                    src="https://i.imgur.com/RjrJpb7.png"
                    alt="hungr_logo"
                  />
                  <p className="phrase1 animated fadeInDown">
                    Come for what you crave.
                  </p>
                  <p className="phrase2 animated fadeInDown">
                    Stay because I need a job P L E A S E
                  </p>
                  <Route path="/signup" component={SignUpFormContainer} />
                  <br />
                  {/* dont need cause login redirects to login page */}
                  {/* <Route path='/login' component={LoginFormContainer} /> */}
                  {LoginOrSignup === "/" || LoginOrSignup === "/login" ? (
                    <ul>
                      <Link to="/signup">
                        <button className="signup_button animated fadeIn">
                          Get Started
                        </button>
                      </Link>
                      <br />

                      <Link to="/login">
                        <button className="login_button animated fadeIn">
                          Log In
                        </button>
                      </Link>
                    </ul>
                  ) : null}
                  {/* show actual components */}
                  {/* <button onClick={props.demo} className="demo_login">Demo Login</button> */}
                  <br />
                  <div className="profile_links">
                    <a href="https://github.com/drkdi">
                      <img
                        className="git-img animated fadeIn"
                        src="https://i.imgur.com/vpbjsvX.png"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/daiderek/">
                      <img
                        className="linkedin-img animated fadeIn"
                        src="https://i.imgur.com/aQVis67.png"
                      />
                    </a>
                  </div>
                  <button
                    className="splash_anchor_bottom twoSecPopup fadeInUp"
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <div className="splash_anchor_bottom_text">
                      <i className="fas fa-angle-down leftish" />
                      What is Hungr?
                      <i className="fas fa-angle-down rightish" />
                    </div>
                  </button>
                </div>
                <div />
              </div>

              <div className="section section2">
                <div className="sk-fading-circle circle-container">
                  <p className="fullPageScrollH blinking">h</p>
                  <i className="fas fa-beer sk-circle1 sk-circle" />
                  <i className="fa-angle-double-right sk-circle2 sk-circle" />
                  <i className="fas fa-laugh-squint sk-circle3 sk-circle" />
                  <i className="fas fa-unlink sk-circle4 sk-circle" />
                  <i className="fas fa-headphones sk-circle5 sk-circle" />
                  <i className="fas fa-video-slash sk-circle6 sk-circle" />
                  <i className="fas fa-poo-storm sk-circle7 sk-circle" />
                  <i className="fas fa-car-crash sk-circle8 sk-circle" />
                  <i className="fas fa-cat sk-circle9 sk-circle" />
                  <i className="fas fa-chess-knight sk-circle10 sk-circle" />
                  <i className="fas fa-coins sk-circle11 sk-circle" />
                  <i className="fas fa-cookie-bite sk-circle12 sk-circle" />
                </div>

                <div className="fullPageExplainWrapper">
                  <h1 className="fullPageHeader">
                    Hungr is so easy to use that it’s hard to explain.
                  </h1>
                  <p className="fullPageText">
                    If you don't like Hawaiian pizza don't bother continuing
                  </p>
                </div>
              </div>

              <div className="section section3">
                <h3>
                  <div className="fullPageExplainWrapper">
                    <h1 className="fullPageHeader blinking">Hungr is blogs.</h1>
                    <p className="fullPageText">
                      {" "}
                      Wow you can blog and stuff! Neat!
                    </p>
                  </div>

                  <div className="fullPagePostWrapper">
                    <img
                      src="https://i.imgur.com/lVpAF8C.png"
                      className="fullPageImage"
                    />
                    <img
                      src="https://i.imgur.com/NMmJmyI.png"
                      className="fullPageImage"
                    />
                    <img
                      src="https://i.imgur.com/NKrFEid.gif"
                      className="fullPageImage"
                    />
                    <img
                      src="https://i.imgur.com/IEPTWy2.png"
                      className="fullPageImage"
                    />
                    <img
                      src="https://i.imgur.com/9PSm9LK.gif"
                      className="fullPageImage"
                    />
                  </div>
                </h3>
              </div>

              <div className="section section4">
                <img
                  src="https://i.imgur.com/KN4Oo0e.png"
                  className="fullPageFeedImage"
                />

                <div className="fullPageImageWrapper">
                  <h1 className="fullPageHeader blinking">
                    You already know how this works.
                  </h1>
                </div>

                <button
                  className="splash_anchor_top"
                  onClick={() => fullpageApi.moveTo(1)}
                >
                  Back to Top
                </button>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default Splash;
