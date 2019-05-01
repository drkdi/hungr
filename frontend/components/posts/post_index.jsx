import React from "react";
import Post from "./post";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let posts = this.props.posts.map(post => {
      return <Post key={post.id} post={post} className="post" />;
    });

    return (
      <>
        <div className="posts_index">{posts.reverse()}</div>
      </>
    );
  }
}

export default PostIndex;
