import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
   return {
      errors: errors.session,
      formType: "Log in",
      navLink: <Link to="/signup">Sign up</Link>,
      logo: <img className="logo" src="https://i.imgur.com/RjrJpb7.png" alt="hungr_logo"/>

   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      processForm: (user) => dispatch(login(user))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);