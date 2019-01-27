import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Account from './account';
import CreateDialog from './create_dialog';
//import other nav stuff upon login

class Nav extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
      <nav className="main_nav">
         <a href="/#/dashboard" className="rainbow">h</a>

         <div className="nav_components">
                
            
         
         {/* search bar */}

         {/* icons */}
         {/* home, compass, mail, smiley/follows, lightning, person, compose*/}
         {/* botton line */}
               {/* <p>{console.log(this.props)} nav</p> */}

            <input type="text" className="search_bar"/>
               {/* <button onClick={this.props.logout}>LOOOG OUT</button> */}

         <div className="nav_buttons">
                  <button className="icons"><i className="fas fa-home"></i></button>

                  {/* dropdown */}
                  < Account props={this.props}/>
                  < CreateDialog props={this.props}/>
                  {/* <button className="icons"><i className="fas fa-user-alt"></i></button> */}

                  {/* on click activate modal */}
                  <button className="createPost"><i className="fas fa-pencil-alt"></i></button>
                        

                    


   
         </div>

         </div>
      </nav>)

      // if this.props.location.pathname === "/"
         
      // else if this.props.location.pathname === "/login"
      // else if this.props.location.pathname === "/signup"
      // else if this.props.location.pathname === "/dashboard"
   }
};

export default Nav;