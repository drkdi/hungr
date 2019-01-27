import React from 'react';
import Post from './post';
import Card from './card'

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

      let cards = this.props.posts.map(card => {
         // return <Card key={post.id} post={post} />
         return < Card key={card.id} card={card}/>
      });

      return (
         <>
            <div className="posts_index">
               {cards}
            </div>
         </>
      )
   }






}

export default PostIndex;