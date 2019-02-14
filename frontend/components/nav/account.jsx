import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { logout } from '../../actions/session_actions';
import { withTheme } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';



class SimpleMenu extends React.Component {
   constructor(props) {
      super(props);
   }

   state = {
      anchorEl: null,
   };

   handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   handleClose = () => {
      this.setState({ anchorEl: null });
   };



   render() {
      const style = {
         background: 'transparent',
         top: -7,
      };

      const { anchorEl } = this.state;

      return (

         <div className="account_div">
            {/* <p>{console.log(this.props.props)} account</p> */}
            <Button
               aria-owns={anchorEl ? 'simple-menu' : undefined}
               aria-haspopup="true"
               onClick={this.handleClick}
               style={style}
            ><div className="icons">
                  <i className="fas fa-user-alt"></i>
               </div></Button>
            <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={this.handleClose}
               className="account_menu"
            >
               {/* <button onClick={this.props.logout} className="logout">Logout</button> */}
               <MenuItem onClick={this.props.props.logout}>Log Out</MenuItem>
               <MenuItem onClick={this.handleClose}>Liked</MenuItem>
               <Link to="/profile"><MenuItem onClick={this.handleClose}>Profile</MenuItem></Link>
               <MenuItem onClick={this.handleClose}>Following</MenuItem>
               <MenuItem onClick={this.handleClose}>Settings</MenuItem>
               <MenuItem onClick={this.handleClose}>Help</MenuItem>
            </Menu>
         </div>
      );
   }
}

export default SimpleMenu;