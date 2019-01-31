export const createLike = post_id => (
   $.ajax({
      method: 'POST',
      url: 'api/likes',
      data: { post_id }
   })
);

export const removeLike = likeId => (
   $.ajax({
      method: 'DELETE',
      url: `api/likes/${likeId}`,
   })
);