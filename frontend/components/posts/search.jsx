import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPosts, fetchPost, deletePost } from "../../actions/post_actions";
import React from "react";
import Post from "./post";
import { merge } from "lodash";

//
const msp = state => {
  return {
    state,
    posts: Object.values(state.entities.posts)
  };
};

const mdp = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id)),
  deletePost: id => dispatch(deletePost(id))
});

class SearchedPosts extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let sorryMessage;
    let path = this.props.location.pathname.slice(8);

    let posts = this.props.posts
      .filter(function(searchQuery) {
        return (
          (searchQuery.body.includes(path) && searchQuery.title !== "") ||
          (searchQuery.title.includes(path) && searchQuery.body !== "")
        );
      })
      .map(post => {
        return <Post key={post.id} post={post} className="post" />;
      });
    if (posts.length === 0) {
      sorryMessage = (
        <div className="sorryNoSearch">Sorry nothing found :(</div>
      );
    }
    return (
      <div className="dashboard_general_other">
        <style>{"body { background: #001935; }"}</style>

        <div className="posts_index">
          {posts.reverse()}
          {sorryMessage};
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    msp,
    mdp
  )(SearchedPosts)
);
