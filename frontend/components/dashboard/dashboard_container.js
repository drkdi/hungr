import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Nav from './nav';



const msp = state => ({
   logout: () => dispatch(logout())
})

export default connect(null, mdp)(Nav);
// export default connect(msp, mdp)(nav);