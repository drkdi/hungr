import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.demoLoginHelper = this.demoLoginHelper.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props
      .processForm(user)
      .then(() => this.props.history.push("/dashboard"));
  }

  demoLogin() {
    this.refs.btn.setAttribute("disabled", "disabled");
    const usernameArr = "thesepretzelsaremakingmethirsty".split("");
    const passwordArr = "password".split("");
    const button = document.getElementById("login_signup_button");
    this.setState({ username: "", password: "" }, () =>
      this.demoLoginHelper(usernameArr, passwordArr, button)
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  demoLoginHelper(usernameArr, passwordArr, button) {
    if (usernameArr.length > 0) {
      this.setState(
        { username: this.state.username + usernameArr.shift() },
        () => {
          window.setTimeout(
            () => this.demoLoginHelper(usernameArr, passwordArr, button),
            60
          );
        }
      );
    } else if (passwordArr.length > 0) {
      this.setState(
        { password: this.state.password + passwordArr.shift() },
        () => {
          window.setTimeout(
            () => this.demoLoginHelper(usernameArr, passwordArr, button),
            70
          );
        }
      );
    } else {
      button.click();
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  renderErrors() {
    // debugger
    if (this.props.errors.length === 0) {
      return null;
    }
    return (
      <ul className="errors_render">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let wallpaperStyle = {
      margin: 0,
      background: `url(${window.splashUrl})`,
      backgroundRepeat: "no-repeat",
      height: "100vh",
      backgroundSize: "cover"
    };

    let dummy;
    let email_field;
    let demoUserButton;
    if (this.props.formType === "Log in") {
      demoUserButton = (
        <button ref="btn" onClick={this.demoLogin} className="demo_button">
          Demo Login
        </button>
      );
    }
    if (this.props.formType === "Sign up") {
      email_field = (
        <input type="text" placeholder="Email" className="email_field" />
      );
    }

    if (this.props.location.pathname === "/signup") {
      dummy = {};
    } else {
      dummy = wallpaperStyle;
    }

    return (
      <div className="session_form" style={dummy}>
        <a href="#/" className="rainbow">
          h
        </a>

        {this.props.logo}

        {/* button opposite of whatever form you're in */}
        <div>{this.props.navLink}</div>

        <form onSubmit={this.handleSubmit}>
          <br />
          {email_field}
          <input
            onChange={this.update("username")}
            type="text"
            placeholder="Username"
            id="email"
            value={this.state.username}
            className="username_input"
          />

          <input
            onChange={this.update("password")}
            type="password"
            placeholder="Password"
            id="password"
            value={this.state.password}
            className="password_input"
          />

          <div />
          {/* button in actual page to sign up, log in*/}
          <input
            className="login_signup_button"
            type="submit"
            value={this.props.formType}
            id="login_signup_button"
          />
        </form>

        {/* after forms, need to be in same class */}
        {this.renderErrors()}
        {demoUserButton}
      </div>
    );
  }
}

export default SessionForm;
