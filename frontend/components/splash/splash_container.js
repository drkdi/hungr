import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const msp = ({session, entities: {users}}) => {
   return {
      currentUser: users[session.id]
   };
}

const mdp = dispatch => {
   const demo = { username: "demo", password: "demodemo"};
   return { demolog: () => dispatch(login(demo))};
}

export default connect(msp, mdp)(Splash);