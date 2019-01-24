import React from 'react';

class SessionForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = { username: "", password: "" };
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
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
               
               {/* <label>
                  Username:
                    <input type="text"
                     value={this.state.username}
                     onChange={this.update('username')}
                  />
               </label> */}

                  <label htmlFor="username" />
                     <input onChange={this.update('username')} 
                        type="text" 
                        placeholder="username" 
                        id="email" 
                        value={this.state.username}
                        className="username_input"/>
                  <br />

               {/* <label>
                  Password:
                     <input type="password"
                     value={this.state.password}
                     onChange={this.update('password')}
                  />
               </label> */}

                  <label htmlFor="password" />
                   <input onChange={this.update('password')} 
                     type="password" 
                     placeholder="password" 
                     id="password" 
                     value={this.state.password}
                     className="password_input"/>
                  
                  <div/>
    {/* button in actual page to sign up, log in*/}
               <input className="login_signup_button" type="submit" value={this.props.formType} />
            
            </form>
         
         {this.renderErrors()}

         </div>
         )


   }
}

export default SessionForm;