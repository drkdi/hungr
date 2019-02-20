import React, { Component } from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post_actions';


const msp = ({ entities, session }, ownProps) => {
  const currentUserID = session[Object.keys(session)[0]];
  const currentUser = entities.users[currentUserID];

  return {ownProps, session, currentUser};
};

const mdp = dispatch => {
  return {
    updatePost: post => dispatch(updatePost(post)),
  };
};

class EditModal extends Component {
  constructor(props) {
    // debugger
    super(props);
    const { post } = props;
    this.state = {title: post.title, body: post.body};
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  // componentDidMount() {
  //   // need to add custom route to get only comments for this specific post's author
  //   this.props.fetchComments();
  // }

  handleSubmit(e) {
    // debugger
  
    e.preventDefault();
    this.props.updatePost(merge({}, this.props.post, this.state))
      .then(this.setState({ body: "", title: ""}))
      .then(document.getElementById("close-modal").click());
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }




  render() {

    // debugger

    return (
      <form onSubmit={this.handleSubmit}>
      <div className="container">

          <button type="button" className="edit_button" data-toggle="modal" data-target="#myModal"><i className="far fa-edit"></i>  </button>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
      
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                {/* <h4 className="modal-title">{this.props.post.title}</h4> */}
                {/* <textarea name="" id="title" cols="30" rows="1" defaultValue={this.props.post.title}></textarea> */}
                  <p className="comment_form_username">Editing as: "{this.props.currentUser.username}"</p>

                  <div className="create_text">
                    <label htmlFor="title" />
                    <input onChange={this.update('title')}
                      type="text"
                      placeholder="title"
                      id="title"
                      value={this.state.title}
                      className="title_input" 
                      />

                     </div>
              <div className="modal-body">
                {/* <textarea name="" id="body" cols="30" rows="5" defaultValue={this.props.post.body}></textarea> */}
                  <label htmlFor="body" />
                  <input onChange={this.update('body')}
                    type="text"
                    id="body"
                    value={this.state.body}
                    className="body_input" 
                    />
              </div>
              <div className="modal-footer">
                    <input type="submit" className="form_post_button"/>
                    <button type="button" id="close-modal" className="form_cancel_button" data-dismiss="modal">Close</button>
              </div>

                </div>
            </div>

          </div>
        </div>

      </div> 
      </form>
    )
  }

}

export default connect(msp, mdp)(EditModal);



