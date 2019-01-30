import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import React from 'react';
import { Component } from 'react';
import { merge } from 'lodash';


const mapStateToProps = ({ entities, session }) => {
   const currentUserID = session[Object.keys(session)[0]];
   const currentUser = entities.users[currentUserID];
   return { currentUser };
};


const mapDispatchToProps = dispatch => ({
   processForm: post => dispatch(createPost(post)),
});

class QuoteForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = { body: '', title: '', author_id: this.props.currentUser.id };
      this.handleSubmit = this.handleSubmit.bind(this);

   }

   handleSubmit(e) {
      e.preventDefault();
      let post = merge({}, this.state);
      this.props.processForm(post)
         // .then(this.setState({ body: '', title: '', tag: '' }))
         .then(this.props.history.push('/dashboard'));
   }

   update(field) {
      return (e) => this.setState({ [field]: e.target.value })
   }

   render() {

      return (
         <>
            <div className="glass_active"></div>

            <form className="create_text" onSubmit={this.handleSubmit}>
               <p className="post_form_username">{this.props.currentUser.username}</p>

            <textarea
                  className="body_input"
                  onChange={this.update('body')}
                  value={this.state.body}
                  id="body"
                  placeholder={"Enter a link ples"}>
               </textarea>

               <div className="form_buttons">
                  <button className="form_cancel_button"><a href="#/" >Close</a></button>
                  <button className="form_post_button">Post</button>
               </div>
            </form>
         </>
      )
   };
}


export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
