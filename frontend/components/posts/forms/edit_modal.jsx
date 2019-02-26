import React, { Component } from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post_actions';


const msp = ({ entities, session }, ownProps) => {
  // debugger
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
      console.log(props.post.id)
    super(props);
    let post = props.post;
    this.state = {title: post.title, body: post.body, id: post.id, hidden: true};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);


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

  handleClick() {
    // this.state.hidden = true;
    this.setState({hidden: false});
    this.props.post.setState({hiddenEdit: false})
    // debugger
  }




  render() {
    // debugger
    // console.log(this.state);
    let edit_modal_thing;



    
    // if (this.props.post.id === this.state.id) { 
    if (this.state.hidden) {
      edit_modal_thing = (<div><button type="button" className="edit_button" onClick={this.handleClick} ><i className="far fa-edit"></i></button></div>)
    } else {
      edit_modal_thing = (<form onSubmit={this.handleSubmit} id={this.props.post.id}>

        
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content-edit">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                {/* <h4 className="modal-title">{this.props.post.title}</h4> */}
                {/* <textarea name="" id="title" cols="30" rows="1" defaultValue={this.props.post.title}></textarea> */}
                <p className="edit_modal_username">Editing as: "{this.props.currentUser.username}"</p>

                <div className="edit_modal_wrapper">
                  <label htmlFor="title" />
                  <input onChange={this.update('title')}
                    type="text"
                    placeholder="title"
                    id="title"
                    value={this.state.title}
                    className="edit_modal_title"
                  />

                </div>
                <div className="edit_modal_wrapper-body">
                  {/* <textarea name="" id="body" cols="30" rows="5" defaultValue={this.props.post.body}></textarea> */}
                  <label htmlFor="body" />
                  <input onChange={this.update('body')}
                    type="text"
                    id="body"
                    placeholder="bodys"
                    value={this.state.body}
                    className="edit_modal_body"
                  />
                </div>
                <div className="modal-footer">
                  <input type="submit" className="form_post_button" />
                  <button type="button" id="close-modal" className="form_cancel_button" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>

          </div>
        </div>

    </form>)

    }
// debugger
    return (
      <>
        {edit_modal_thing}
      </>
    )
    }

}

export default connect(msp, mdp)(EditModal);



