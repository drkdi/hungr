import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mdp = dispatch => {
   const demo = { username: "demo", password: "demodemo"}
   return { demolog: () => dispatch(login(demo))}   
}

export default connect(null, mdp)(Splash);