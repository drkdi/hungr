import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
   return {
      errors: errors.session,
      formType: "Log in",
      navLink: <Link to="/signup"><button className="anti_button">Sign Up</button></Link>,

      logo: <img className="logo" src="https://i.imgur.com/RjrJpb7.png" alt="hungr_logo"/>

   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      processForm: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);