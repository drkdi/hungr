import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
// import { withRouter } from 'react-router-dom';

   const mapStateToProps = ({ entities, session }, ownProps) => {
      const currentUserID = session[Object.keys(session)[0]];
      const currentUser = entities.users[currentUserID];
      return { currentUser };
   };

   const mapDispatchToProps = dispatch => ({
      processForm: post => dispatch(createPost(post)),
   });

   

   class MediaForm extends React.Component {
      constructor(props) {
         super(props);
         this.state = props.post;
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleFile = this.handleFile.bind(this);
         this.state = {
            body: '',
            title: 'image',
            author_id: this.props.currentUser.id,
            mediaFile: null,
            mediaUrl: null, // for image preview
         };
      }

      handleSubmit(e) {
         
         e.preventDefault();
         const formData = new FormData();
         formData.append('post[body]', this.state.body);
         formData.append('post[author_id]', this.state.author_id);
         formData.append('post[media]', this.state.mediaFile);
         formData.append('post[title]', this.state.title);
         
         // console.log(this.state);
         // console.log(this.props);
         // console.log(formData);

         // debugger
         // processForm(this.state)
         this.props.processForm(formData)
            .then(this.props.history.push('/dashboard'));
      }


      handleFile(e) {
         const file = e.currentTarget.files[0];
         const fileReader = new FileReader();
         fileReader.onloadend = () => {
            this.setState({ mediaFile: file, fileUrl: fileReader.result });
         };
         if (file) {
            fileReader.readAsDataURL(file);
         }
      }

      update(field) {
         return (e) => this.setState({ [field]: e.target.value })
      }

      render() {

         let media = this.state.fileUrl || this.state.media;
         // let preview = <image src={media} className="preview" />
         let preview = (<video className="post-media" controls width="510px">
               <source src={media} />
            </video> )







         // let fileInput = <>
         //    <input onChange={this.handleFile} id="media-input" type="file" />
         // </>


         

         return (
            <form className="create_media" onSubmit={this.handleSubmit}>
               
               <p> Image Preview</p>
               {preview}


               <textarea
                  className="body_input"
                  onChange={this.update('body')}
                  value={this.state.body}
                  id="body"
                  placeholder={"Your text here"}>
               </textarea>

               <input type="file"
                  placeholder={"image"}
                  onChange={this.handleFile}
                   />



               <div className="form_buttons">
                  <button className="media_form_button">Post</button>
                  <a href="#/" className="create_text_cancel">Cancel</a>
               </div>



            </form>
         )
      }
   }







export default connect(mapStateToProps, mapDispatchToProps)(MediaForm);
