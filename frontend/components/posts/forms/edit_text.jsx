import React from 'react';
import { Component } from 'react';
import { updatePost } from '../../../actions/post_actions';
import { merge } from 'lodash';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => ({
   updatePost: post => dispatch(updatePost(post)),
});


class EditText extends React.Component {

   constructor(props) {
      debugger
      super(props);
      this.state = { body: post.body, title: post.title, author_id: this.props.currentUser.id };
      this.handleSubmit = this.handleSubmit.bind(this);

   }

   handleSubmit(e) {
      e.preventDefault();
      let post = merge({}, this.state);
      this.props.updatePost(merge({}, this.props.post, this.state))
         .then(this.setState({ body: "", title: "", author_id: this.props.currentUser.id}))
         .then(this.props.history.push('/dashboard'));
   }

   update(field) {
      return (e) => this.setState({ [field]: e.target.value });
   }

   render() {

      return (

         <form className="create_text" onSubmit={this.handleSubmit}>
            <p>banana</p>

            <input
               onChange={this.update('title')}
               value={this.state.title}
               id="title"
               type="text"
               placeholder={"title"} />

            <textarea
               onChange={this.update('body')}
               value={this.state.body}
               id="body"
               placeholder={"Your text here"}>
            </textarea>

            <button className="text_form_post">Post</button>

            <a href="#/" className="create_text_cancel">Cancel</a>
         </form>
      )
   };
}

export default connect(null, mapDispatchToProps)(EditText);
