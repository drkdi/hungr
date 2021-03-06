import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchPosts,
  fetchPost,
  deletePost,
  fetchLikedPosts
} from "../../actions/post_actions";
import React from "react";
import Post from "./post";
import { merge } from "lodash";

const msp = state => {
  return {
    state,
    posts: Object.values(state.entities.posts)
  };
};

const mdp = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id)),
  fetchLikedPosts: id => dispatch(fetchLikedPosts(id)),
  deletePost: id => dispatch(deletePost(id))
});

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchLikedPosts(this.props.state.session.id);
  }

  render() {
    let posts = this.props.posts.map(post => {
      return <Post key={post.id} post={post} className="post" />;
    });

    return (
      <div className="dashboard_general_other">
        <style>{"body { background: #001935; }"}</style>

        <div className="posts_index">{posts.reverse()}</div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    msp,
    mdp
  )(PostIndex)
);
