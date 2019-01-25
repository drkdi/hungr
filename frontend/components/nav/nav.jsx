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

         <div className="nav_components">
                
            
         
         {/* search bar */}

         {/* icons */}
         {/* home, compass, mail, smiley/follows, lightning, person, compose*/}
         {/* botton line */}

            <input type="text" className="search_bar"/>
         
         <div className="nav_buttons">
            <button className="icons"><i className="fas fa-utensils"></i></button>
            <button className="icons"><i className="far fa-envelope"></i></button>
            <button className="icons"><i className="fas fa-compass"></i></button>
            <button className="icons"><i className="far fa-envelope"></i></button>
            <button className="icons"><i className="far fa-smile-wink"></i></button>
            <button className="icons"><i className="far fa-poo-storm"></i></button>
            <button className="icons"><i className="far fa-knife-kitchen"></i></button>
            <button className="icons"><i className="fas fa-glass-cheers"></i></button>
         </div>

         <button onClick={this.props.logout} className="logout">Logout</button>
         </div>
      </nav>)

      // if this.props.location.pathname === "/"
         
      // else if this.props.location.pathname === "/login"
      // else if this.props.location.pathname === "/signup"
      // else if this.props.location.pathname === "/dashboard"
   }
};

export default Nav;