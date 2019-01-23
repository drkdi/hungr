import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

//props to presentational component /currentuser, logout/
//state.session.id get currentuserid
//get state.entities.users from state
//state.entities.users[state.session.id]
// {state} to msp

const mapStateToProps = ({ session, entities: {users} }) => {
   return {
   
      currentUser: users[session.id]
      ////////????????? => find users matching id by session.id, using entities
   }
}

const mapDispatchToProps = dispatch => {
   
   return {logout: () => dispatch(logout())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);