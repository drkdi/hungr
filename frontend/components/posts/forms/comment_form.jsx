import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "../../../actions/comment_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ entities, session }, post) => {
  const currentUserID = session[Object.keys(session)[0]];
  const currentUser = entities.users[currentUserID];
  return { currentUser, post };
};

const mapDispatchToProps = dispatch => ({
  processForm: comment => dispatch(createComment(comment))
});

class CommentForm extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      body: "",
      post_id: props.post.post.id,
      author_id: props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // debugger
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm({
      comment: {
        body: this.state.body,
        post_id: this.props.post.post.id,
        author_id: this.state.author_id
      }
    });
    this.state.body = "";
    window.location.reload();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div>
        <form className="comment_form" onSubmit={this.handleSubmit}>
          <p className="comment_form_username">
            Posting as: "{this.props.currentUser.username}"
          </p>

          <input
            className="comment_input"
            onChange={this.update("body")}
            value={this.state.body}
            id="body"
            placeholder={"Say your thang"}
          />

          <div className="form_buttons">
            <button className="form_comment_button">Reply</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentForm)
);
