import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts, fetchPost, deletePost, fetchUserPosts } from '../../actions/post_actions';
import React from 'react';
import Post from './post';
import { merge } from 'lodash';

//
const msp = (state) => {
   // { entities }
   // debugger
   return ({
      state,
      posts: Object.values(state.entities.posts).filter(post => 
         state.session.id === post.author_id) || []
   })//  posts: Object.values(entities.posts) || []
   // posts: []
};

const mdp = (dispatch) => ({
   fetchPosts: () => dispatch(fetchPosts()),
   fetchPost: (id) => dispatch(fetchPost(id)),
   fetchUserPosts: (id) => dispatch(fetchUserPosts(id)),
   deletePost: (id) => dispatch(deletePost(id)),
});


// import Card from './card';

// shows all posts
class PostIndex extends React.Component {

   constructor(props) {
      super(props);

   }
   componentDidMount() {
      // this.props.fetchPosts();
      // debugger

      this.props.fetchUserPosts(this.props.state.session.id);
      // this.props.state.session.id
   }

   render() {
      // this.forceUpdate()
      // debugger
      // let cards = this.props.posts.map(card => {
      //    // return <Card key={post.id} post={post} />
      //    return < Card key={card.id} card={card} className="post" />

      let posts = this.props.posts.map(post => {
         // console.log(this.props.state.session.id)
         // console.log(post.author_id)

         // // debugger
         // console.log(this.props.state.session.id)
         // console.log(post.author_id)
         // if (this.props.state.session.id === (post.author_id)) {
         //    return <Post key={post.id} post={post} className="post" /> 
         // }
         // else {
         //    return <Post />;
         // }
         return <Post key={post.id} post={post} className="post" />
      });

      console.log(this.props.state.session.id)
         console.log(posts)


      // filter?





      return (

         <div className="dashboard_general">
            <style>{'body { background: #35465C; }'}</style>

            <div className="posts_index">
               {posts.reverse()}
            </div>
         </ div>
      )
   }


}

export default withRouter(connect(msp, mdp)(PostIndex));
