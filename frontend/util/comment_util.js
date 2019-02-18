export const fetchComments = () => {
   return $.ajax({
      url: "api/comments",
      method: "get"
   });
};

export const fetchComment = (id) => {
   return $.ajax({
      url: `api/comment/${id}`,
      method: "get"
   });
};


export const createComment = comment => {
   // debugger
   return $.ajax({
      method: 'post',
      url: 'api/comments',
      data: comment,
   });
};

export const deleteComment = commentId => {
   // debugger
   return $.ajax({
      method: 'delete',
      url: `api/comments/${commentId}`,
   })

};