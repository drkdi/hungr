import { connect } from 'react-redux';
import TextForm from './text_form';
import { createPost } from '../../../actions/post_actions';

const mapStateToProps = ({ entities, session }) => {
   const currentUserID = session[Object.keys(session)[0]];
   const currentUser = entities.users[currentUserID];
   return { currentUser };
};


const mapDispatchToProps = dispatch => ({
   processForm: post => dispatch(createPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);
