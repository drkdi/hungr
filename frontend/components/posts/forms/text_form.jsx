import React from 'react';
import {Component} from 'react';
import { merge } from 'lodash';

 class TextForm extends Component {
   
      constructor(props) {
            super(props);
            this.state = { body: '', title: '', author_id: this.props.currentUser.id};
            this.handleSubmit = this.handleSubmit.bind(this);
            
      }

      handleSubmit(e) {
            e.preventDefault();
            let post = merge({}, this.state);
            this.props.processForm(post);
            // .then(this.setState({ body: '', title: '', tag: '' }))
            // .then(this.props.history.push('/dashboard'));
       }

       update(field) {
             return (e) => this.setState({[field]: e.target.value})
       }

       render() {
            
            return (
                  <form className="create_text" onSubmit={this.handleSubmit}>
                        <input type="text" className="create_text_title" placeholder="Title"></input>

                        <input type="text" className="create_text_text" placeholder="Your text here"></input>
                        <input
                              onChange={this.update('title')}
                              value={this.state.title}
                              id="title"
                              type="text"
                              placeholder={"title"} />

                        <label htmlFor="body"></label>
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

export default TextForm;

