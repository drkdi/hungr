import React, { Component } from "react";
import { merge } from "lodash";
import { connect } from "react-redux";
import { updatePost } from "../../../actions/post_actions";

const msp = ({ entities, session }, ownProps) => {
  const currentUserID = session[Object.keys(session)[0]];
  const currentUser = entities.users[currentUserID];

  return { ownProps, session, currentUser };
};

const mdp = dispatch => {
  return {
    updatePost: post => dispatch(updatePost(post))
  };
};

class EditModal extends Component {
  constructor(props) {
    console.log(props.post.id);
    super(props);
    let post = props.post;
    this.state = { title: post.title, body: post.body, id: post.id };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePost(merge({}, this.props.post, this.state));
    window.location.reload();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    let edit_modal_thing;
    return (
      <>
        <button
          type="button"
          className="edit_button hoverUp"
          data-toggle="modal"
          data-target={`#myModal${this.props.post.id}`}
        >
          <i className="far fa-edit" title="edit" />
        </button>

        <form onSubmit={this.handleSubmit} id={this.props.post.id}>
          <div
            className="modal fade"
            id={`myModal${this.props.post.id}`}
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-content-edit">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                  <p className="edit_modal_username">
                    Editing as: "{this.props.currentUser.username}"
                  </p>

                  <div className="edit_modal_wrapper">
                    <label htmlFor="title" />
                    <input
                      onChange={this.update("title")}
                      type="text"
                      placeholder="title"
                      id="title"
                      value={this.state.title}
                      className="edit_modal_title"
                    />
                  </div>

                  <div className="edit_modal_wrapper-body">
                    <label htmlFor="body" />

                    <textarea
                      onChange={this.update("body")}
                      type="text"
                      id="body"
                      placeholder="bodys"
                      value={this.state.body}
                      className="edit_modal_body"
                      cols="30"
                      rows="1"
                    />
                  </div>

                  <div className="modal-footer">
                    <input type="submit" className="form_post_button" />
                    <button
                      type="button"
                      id="close-modal"
                      className="form_cancel_button"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default connect(
  msp,
  mdp
)(EditModal);
