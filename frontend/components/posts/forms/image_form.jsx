import React from 'react';
import { Component } from 'react';
import { merge } from 'lodash';

class ImageForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = { body: '', 
                     title: '', 
                     author_id: this.props.currentUser.id, 
                     photoFile: null, 
                     photoUrl: null,
                  };
      this.handleSubmit = this.handleSubmit.bind(this);


   }  

   handleSubmit(e) {
      e.preventDefault();

      if (this.state.photoFile){
   }
      $.ajax({
         url: '/api/posts',
         method: 'Post',
         data: formData,
         contentType: false,
         processData: false
      }).then((response) => console.log(response.message));

      let post = merge({}, this.state);
      this.props.processForm(post)
         // .then(this.setState({ body: '', title: '', tag: '' }))
         .then(this.props.history.push('/dashboard'));
   }
   update(field) {
      return (e) => this.setState({ [field]: e.target.value })
   }

   handleFile(e) {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {

         this.setState({photoFile: file, photoUrl: fileReader.result});
         };
      if (file){
         fileReader.readAsDataURL(file);
         }
   }

   render() {
      console.log(this.state);

      const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null

      return (
         <form className="create_text" onSubmit={this.handleSubmit}>
            <input
               type="text"
               className="title_input"
               onChange={this.update('title')}
               value={this.state.title}
               id="title"
               placeholder={"title"} />

            <input type="file"
               placeholder={"image"} 
               onChange={this.handleFile.bind(this)};
               />
            
            <p> Image Preview</p>
            {preview}

            <div className="form_buttons">
               <button className="text_form_button">Post</button>
               <a href="#/" className="create_text_cancel">Cancel</a>
               <a type="link" href="#/" className="create_text_cancel">Close</a>

            </div>
         </form>
      )
   };
}

export default TextForm;

