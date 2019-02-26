export const fetchPosts = () => {
   return $.ajax({
      url: "api/posts",
      method: "get"
   });
};

export const fetchPost = (id) => {
   return $.ajax({
      url: `api/post/${id}`,
      method: "get"
   });
};

export const createPost = (post) => {
   return $.ajax({
      method: "POST",
      url: "api/posts",
      processData: false,
      contentType: false,
      dataType: 'json',
      data: post,
      
   });
}

export const updatePost = (post) => {
   return $.ajax({
      url: `api/posts/${post.id}`,
      method: "patch",
      data: { post },
   });
}

export const deletePost = (postId) => {
   return $.ajax({
      url: `api/posts/${postId}`,
      method: "delete",
   });
}

export const fetchUserPosts = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/user_posts/${id}`,
  });
};

export const fetchLikedPosts = (id) => {
   return $.ajax({
      method: 'get',
      url: `api/liked_posts/${id}`,
   });
};
