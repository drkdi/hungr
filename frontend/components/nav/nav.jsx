import React from 'react';
import {Link, NavLink} from 'react-router-dom';
//import other nav stuff upon login

class Nav extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
      <nav className="main_nav">
      <a href="#/" className="rainbow">h</a>

      <p> I'm the nav </p>
      
      </nav>)

      // if this.props.location.pathname === "/"
         
      // else if this.props.location.pathname === "/login"
      // else if this.props.location.pathname === "/signup"
      // else if this.props.location.pathname === "/dashboard"
   }
};

export default Nav;