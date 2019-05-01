import React from 'react';

export const Likes = ({post, currentUserId, like, unlike}) => {
   const likeAction;
   const currentUsersLike = post.likes.map(
      like => {
         if (like.author_id === currentUserId) {
            return like
         }
      }
   )
   if (currentUsersLike) {
      likeAction = () => unlike(currentUsersLike.id)
   }
   else {
      likeAction = () => like(post.id)
   }

   const likeButton = (
      <button onClick={likeAction} className="likeButton">
         <i className="fas fa-heart"></i>
      </button>
   )

   return (
      <>
         {likeButton}
      </>

   )

}