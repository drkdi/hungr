import React from 'react';
import {Component} from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';

const mapStateToProps = ({ entities, session }) => {
      // debugger
      const currentUserID = session[Object.keys(session)[0]];
      const currentUser = entities.users[currentUserID];
      return { currentUser };
};


const mapDispatchToProps = dispatch => ({
      processForm: post => dispatch(createPost(post)),
});


 class TextForm extends React.Component {
   
      constructor(props) {
            
            super(props);
            this.state = { body: '', title: '', author_id: this.props.currentUser.id};
            this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(e) {
            // debugger
            
            e.preventDefault();
            // let post = merge({}, this.state);
            // this.props.processForm(post)
            // // this.props.processForm(this.state)
            // // .then(this.setState({ body: '', title: '', tag: '' }))
            // .then(this.props.history.push('/dashboard'));
       
            let formData = new FormData();
            formData.append('post[body]', this.state.body);
            formData.append('post[author_id]', this.state.author_id);
            formData.append('post[title]', this.state.title);
            
            
            if (this.state.body === "" || this.title === "") {
                  alert("needs body or title")
            }
            else {
                  this.props.processForm(formData).then(this.props.history.push('/dashboard'));
            }
      
      }

       update(field) {
             return (e) => this.setState({[field]: e.target.value})
       }

       render() {


            return (
                  <div>
                        <div className="glass_active"></div>
                        <form className="create_text" onSubmit={this.handleSubmit}>

                        <p className="post_form_username">{this.props.currentUser.username}</p>
            
                              <input
                                    className="title_input"
                                    onChange={this.update('title')}
                                    value={this.state.title}
                                    id="title"
                                    type="text"
                                    placeholder={"Title"} />


                              <textarea
                                    className="body_input"
                                    onChange={this.update('body')}
                                    value={this.state.body}
                                    id="body"
                                    placeholder={"Your text here"}>
                              </textarea>

                              <div className="form_buttons">
                                    <button type="link" className="form_cancel_button"><a type="link" href="#/" >Close</a></button>
                                    {/* <a typeclassName="form_cancel_button" href="#/" >Close</a> */}
                                    <button className="form_post_button">Post</button>
                              </div>
                        </form>
                  </div>
            )
            };
            }

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);

