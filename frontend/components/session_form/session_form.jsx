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
         [field]: e.currentTarget.value
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
         <div>
            <form onSubmit={this.handleSubmit}>
               Please {this.props.formType} or {this.props.navLink}
               {this.renderErrors()}

               <label>
                  Username:
            <input type="text"
                     value={this.state.username}
                     onChange={this.update('username')}
                  />
               </label>

               <br />

               <label>
                  Password:
              <input type="password"
                     value={this.state.password}
                     onChange={this.update('password')}
                  />
               </label>

               <input type="submit" value={this.props.formType} />
            </form>
         </div>)


   }
}

export default SessionForm;