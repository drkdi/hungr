import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Nav from "./nav";

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mdp
)(Nav);
