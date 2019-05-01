import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostIndex from "./post_index";
import { fetchPosts, fetchPost, deletePost } from "../../actions/post_actions";
//
const msp = state => {
  return {
    posts: Object.values(state.entities.posts) || []
  };
};

const mdp = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id)),
  deletePost: id => dispatch(deletePost(id))
});

export default withRouter(
  connect(
    msp,
    mdp
  )(PostIndex)
);
