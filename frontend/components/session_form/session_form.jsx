import React from 'react';

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
      this.props.processForm(user).then(() => this.props.history.push('/dashboard'));
   }

   demoLogin() {
      const usernameArr = "guyf13r1@flavor.com".split("");
      const passwordArr = "password".split("");
      const button = document.getElementById('login_signup_button');
      this.setState({username:'', password:''}, () => 
         this.demoLoginHelper(usernameArr, passwordArr, button))
   }

   componentWillUnmount() {
      this.props.clearErrors();
   }

   demoLoginHelper(usernameArr, passwordArr, button) {
      if (usernameArr.length > 0) {
         this.setState(
            { username: this.state.username + usernameArr.shift()}, () => {
               window.setTimeout( () =>
               this.demoLoginHelper(usernameArr, passwordArr, button), 10);
            }
         );
      }
      else if (passwordArr.length > 0) {
         this.setState(
            { password: this.state.password + passwordArr.shift()}, () => {
               window.setTimeout( () => 
               this.demoLoginHelper(usernameArr, passwordArr, button), 10);
            }
         );
      }
      else {
         button.click();
      }
   }


   update(field) {
      return e => this.setState({
         [field]: e.target.value
      });
   }

   

   renderErrors() {
      return (
         <ul>
            {this.props.errors.map((error, i) => (
               <li key={`error-${i}`}>
                  {error}
               </li>
            ))}
         </ul>
      );
   }


   render() {
   
   let demoUserButton;
   if (this.props.formType === "Log in") {
      demoUserButton = <button onClick={this.demoLogin} className="demo_button">Enter Flavortown without a ticket</button>
   }
   
      return (
         
         <div className="session_form">
             <a href="#/" className="rainbow">h</a>
         
            {this.props.logo}

            {/* button opposite of whatever form you're in */}
            <div className="anti_button">
               {this.props.navLink}
            </div>


            <form onSubmit={this.handleSubmit}>
               {/* Please {this.props.formType} or {this.props.navLink} */}
               <br/>

                  <label htmlFor="username" />
                     <input onChange={this.update('username')} 
                        type="text" 
                        placeholder="username" 
                        id="email" 
                        value={this.state.username}
                        className="username_input"/>

                  <label htmlFor="password" />
                   <input onChange={this.update('password')} 
                     type="password" 
                     placeholder="password" 
                     id="password" 
                     value={this.state.password}
                     className="password_input"/>
                  
                  <div/>
    {/* button in actual page to sign up, log in*/}
               <input className="login_signup_button" type="submit" value={this.props.formType} id="login_signup_button"/>
            
            </form>

            {/* after forms, need to be in same class */}
            {this.renderErrors()}
            { demoUserButton }

         </div>

         )


   }
}

export default SessionForm;