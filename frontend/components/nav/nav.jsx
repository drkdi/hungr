import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Account from './account';
import CreateDialog from './create_dialog';
//import other nav stuff upon login

class Nav extends React.Component {
   constructor(props) {
      super(props);
      this.state = { search: ''};
      this.checkSubmit = this.checkSubmit.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

   }

   checkSubmit(e) {
      if (e && e.keyCode == 13) {
         this.handleSubmit(this.state.search);
      }
   }

   handleSubmit(search) {
      // let q = this.state.search;
      this.setState({ search: '' });
      this.props.history.push(`/search/${search}`);
   }

   handleFocus() {
      document.addEventListener("keypress", this.checkSubmit);
   }

   update(field) {
      return (e) => this.setState({ [field]: e.target.value })
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

            {/* <input type="text" className="search_bar" /> */}
               {/* <form onsubmit="location.href='facebook.com' + document.getElementById('myInput').value; return false;">
                  <input type="text" id="myInput" />
                  <input type="submit" />
               </form> */}
               
            
               <i className="search_bar_icon fas fa-search"></i>

               <input 
                  value={this.state.search}
                  onChange={this.update('search')}
                  onFocus={this.handleFocus.bind(this)}
                  type="text" 
                  className="search_bar"
                  placeholder="Search Hungr"
                   />
               






               {/* <button onClick={this.props.logout}>LOOOG OUT</button> */}

               <div className="nav_buttons">
                  {/* <button className="icons"><i className="fas fa-home"></i></button> */}
                     <a href="#/dashboard"><i className="down icons fas fa-home" title="home"></i></a>
                     <Link to="/liked"><i className="down icons fas fa-heart" title="liked"></i></Link>
                     <Link to="/profile"><i className="down icons fas fa-user-alt" title="profile"></i></Link>
                  < Account props={this.props}/>

                  {/* <button className="icons"><i className="fas fa-user-alt"></i></button> */}
                  < CreateDialog props={this.props}/>

                  {/* on click activate modal */}
                  {/* <button className="createPost"><i className="fas fa-pencil-alt"></i></button> */}
                        

                    


   
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