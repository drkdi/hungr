import React from 'react';
import Post from './post';


// shows all posts
class PostIndex extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
      this.props.fetchPosts();
      
   }

   render() {
      let posts = this.props.posts.map(post => {
         return <Post key={post.id} post={post} />
      });

      return (
         <>

            <div className="posts_index">
               {posts}
            </div>
         </>
      )
   }






}

export default PostIndex;