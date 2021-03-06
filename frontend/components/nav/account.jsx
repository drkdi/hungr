import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { logout } from "../../actions/session_actions";
import { withTheme } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

class SimpleMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const style = {
      background: "transparent",
      top: -7
    };

    const { anchorEl } = this.state;

    return (
      <div className="account_div">
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={style}
        >
          <i className="down icons fas fa-cogs" title="account" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          className="account_menu"
        >
          <MenuItem onClick={this.props.props.logout}>Log Out</MenuItem>
          <Link to="/liked">
            <MenuItem onClick={this.handleClose}>Liked</MenuItem>
          </Link>
          <Link to="/profile">
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          </Link>
          <MenuItem
            onClick={() => {
              location.href = "http://drkdi.github.io";
            }}
          >
            LinkedIn
          </MenuItem>
          <MenuItem
            onClick={() => {
              location.href = "https://linkedin.com/in/daiderek/";
            }}
          >
            Github
          </MenuItem>
          <MenuItem
            onClick={() => {
              location.href = "https://derekdai.com";
            }}
          >
            derekdai.com
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
