import React, { Component } from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post_actions';


const msp = ({ entities, session }, ownProps) => {

  return {ownProps, session};
};

const mdp = dispatch => {
  return {
    updatePost: post => dispatch(updatePost(post)),
  };
};

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.post.title, body: props.post.body};
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

        <button type="button" className="form_cancel_button" data-toggle="modal" data-target="#myModal">Edit</button>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                {/* <h4 className="modal-title">{this.props.post.title}</h4> */}
                {/* <textarea name="" id="title" cols="30" rows="1" defaultValue={this.props.post.title}></textarea> */}

                  <label htmlFor="title" />
                  <input onChange={this.update('title')}
                    type="text"
                    placeholder="title"
                    id="title"
                    value={this.state.title}
                    className="edit_modal_title" />

              </div>
              <div className="modal-body">
                {/* <textarea name="" id="body" cols="30" rows="5" defaultValue={this.props.post.body}></textarea> */}
                  <label htmlFor="body" />
                  <input onChange={this.update('body')}
                    type="text"
                    id="body"
                    value={this.state.body}
                    className="edit_modal_body" />
              </div>
              <div className="modal-footer">
                <input type="submit" className="edit_modal_save"/>
                <button type="button" id="close-modal" className="btn btn-default" data-dismiss="modal">Close</button>
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



