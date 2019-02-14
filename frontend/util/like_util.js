export const createLike = post_id => {
   // debugger
   return $.ajax({
      method: 'post',
      url: 'api/likes',
      data: { post_id }
   })
};

export const removeLike = likeId => {
   // debugger
   return $.ajax({
      method: 'delete',
      url: `api/likes/${likeId}`,
   })

};