import React from 'react';
import {Component} from 'react';
import { merge } from 'lodash';

 class TextForm extends React.Component {
   
      constructor(props) {
            super(props);
            this.state = { body: '', title: '', author_id: this.props.currentUser.id};
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
             return (e) => this.setState({[field]: e.target.value})
       }

       render() {
            
            return (
                  <form className="create_text" onSubmit={this.handleSubmit}>

                        <input
                              className="title_input"
                              onChange={this.update('title')}
                              value={this.state.title}
                              id="title"
                              type="text"
                              placeholder={"title"} />

                        <label htmlFor="body"></label>
                        <textarea
                              className="body_input"
                              onChange={this.update('body')}
                              value={this.state.body}
                              id="body"
                              placeholder={"Your text here"}>
                        </textarea>

                        <div className="form_buttons">
                              <button className="text_form_button">Post</button>
                              <a href="#/" className="create_text_cancel">Cancel</a>
                        </div>
                  </form>
            )
            };
            }

export default TextForm;

