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
         <a href="#/dashboard" className="rainbow">h</a>

         <div className="nav_components">
            <p>I'm the nav?</p>
            
         
         {/* search bar */}

         {/* icons */}
         {/* home, compass, mail, smiley/follows, lightning, person, compose*/}
         {/* botton line */}
         <div className="search_bar">search bar</div>
         
         <div className="icons">
            <i className="fas fa-utensils"></i>
            <i class="fas fa-compass"></i>
            <i class="far fa-envelope"></i>
            <i class="far fa-smile-wink"></i>
            <i class="far fa-poo-storm"></i>
            <i class="far fa-knife-kitchen"></i>
            <i class="fas fa-glass-cheers"></i>
            <i class="far fa-utensils"></i>
         </div>   


         <button onClick={this.props.logout} className="Logout">Logout</button>





         
         
         
         </div>
      </nav>)

      // if this.props.location.pathname === "/"
         
      // else if this.props.location.pathname === "/login"
      // else if this.props.location.pathname === "/signup"
      // else if this.props.location.pathname === "/dashboard"
   }
};

export default Nav;