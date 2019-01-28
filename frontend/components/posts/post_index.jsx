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

      let cards = this.props.posts.map(card => {
         // return <Card key={post.id} post={post} />
         return < Card key={card.id} card={card} className="post" />
      });
      // debugger
      return (
         <>
            <div className="posts_index">
               {cards.reverse()}
            </div>
         </>
      )
   }






}

export default PostIndex;