import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../actions/comment_actions';

const mapStateToProps = ({ entities, session }, post) => {
   // debugger
   const currentUserID = session[Object.keys(session)[0]];
   const currentUser = entities.users[currentUserID];
   return { currentUser, post};
};


const mapDispatchToProps = dispatch => ({
   processForm: comment => dispatch(createComment(comment)),
});


class CommentForm extends React.Component {

   constructor(props) {
      // debugger
      super(props);
      this.state = { body: '', post_id: props.post.post.id, author_id: props.currentUser.id };
      this.handleSubmit = this.handleSubmit.bind(this);
      // debugger

   }

   handleSubmit(e) {
      e.preventDefault();
      
      // let formData = new FormData();
      // formData.append('comment[body]', this.state.body);
      // formData.append('comment[post_id]', this.state.post_id);
      // formData.append('comment[author_id]', this.state.author_id);
      // this.props.processForm(formData)
      //    .then(this.props.history.push('/dashboard'));
   
      this.props.processForm( {comment: {body: this.state.body, post_id: this.state.post_id, author_id: this.state.author_id}})
      // debugger
      this.state.body = '';
      
   }

   update(field) {
      return (e) => this.setState({ [field]: e.target.value })
   }

   render() {


      return (
         <div>
            <form className="create_text" onSubmit={this.handleSubmit}>

               <p className="post_form_username">{this.props.currentUser.username}</p>

               <input
                  className="body_input"
                  onChange={this.update('body')}
                  value={this.state.body}
                  id="body"
                  placeholder={"Say your thang"} />

               <div className="form_buttons">
                  <button className="form_comment_button">Reply</button>
               </div>
            </form>
         </div>
      )
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);

