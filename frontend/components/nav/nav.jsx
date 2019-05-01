import React from "react";
import { Link, NavLink } from "react-router-dom";
import Account from "./account";
import CreateDialog from "./create_dialog";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.checkSubmit = this.checkSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkSubmit(e) {
    if (e && e.keyCode == 13) {
      this.handleSubmit(this.state.search);
    }
  }

  handleSubmit(search) {
    this.setState({ search: "" });
    this.props.history.push(`/search/${search}`);
  }

  handleFocus() {
    document.addEventListener("keypress", this.checkSubmit);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <nav className="main_nav">
        <a href="/#/dashboard" className="rainbow">
          h
        </a>

        <div className="nav_components">
          <i className="search_bar_icon fas fa-search" />

          <input
            value={this.state.search}
            onChange={this.update("search")}
            onFocus={this.handleFocus.bind(this)}
            type="text"
            className="search_bar"
            placeholder="Search Hungr"
          />

          <div className="nav_buttons">
            <a href="#/dashboard">
              <i className="down icons fas fa-home" title="home" />
            </a>
            <Link to="/liked">
              <i className="down icons fas fa-heart" title="liked" />
            </Link>
            <Link to="/profile">
              <i className="down icons fas fa-user-alt" title="profile" />
            </Link>

            <a href="https://github.com/drkdi/hungr/">
              <i
                className="down fab icons fa-github"
                style={{ fontSize: "25px", top: "13px" }}
              />
            </a>
            <a href="https://linkedin.com/in/daiderek/">
              <i
                className="down icons fab fa-linkedin"
                style={{ fontSize: "25px", top: "13px" }}
              />
            </a>
            <a href="https://derekdai.com/">
              <img
                className="down"
                style={{
                  width: "30px",
                  position: "relative",
                  top: "12px",
                  left: "7px"
                }}
                src="https://i.imgur.com/9d5Lys8.gif"
                alt=""
              />
            </a>

            <Account props={this.props} />
            <CreateDialog props={this.props} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
