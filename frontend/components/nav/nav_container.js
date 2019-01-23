import {connect} from 'react-redux';
import nav from './main_nav';

const msp = ({entities, session}) => {
   const currentUser = enities.user[currentUserID];
   return {currentUser};
}

const mdp = dispatch => ({
   logout: () => dispatch(logout())
})

// export default connect(msp, mdp)(nav);