export const createComment = comment => {
   // debugger
   return $.ajax({
      method: 'post',
      url: 'api/comments',
      data: comment,
   });
};

export const removeComment = commentId => {
   // debugger
   return $.ajax({
      method: 'delete',
      url: `api/comments/${commentId}`,
   })

};