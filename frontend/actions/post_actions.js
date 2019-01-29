import * as PostAPIUtil from "../util/post_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePosts = (posts) => ({
   type: RECEIVE_POSTS,
   posts,
});

export const receivePost = (post) => ({
   type: RECEIVE_POST,
   post,
});

export const removePost = (postId) => {
   return  { type: REMOVE_POST,
   postId,}
};

export const fetchPosts = () => dispatch => (
   PostAPIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = (postId) => dispatch => (
   PostAPIUtil.fetchPost(postId).then(post => dispatch(receivePost(post)))
);

export const createPost = (post) => dispatch => {
   // debugger
   // const formData = new FormData();
   // formData.append('post[body]', post.body);
   // formData.append('post[author_id]', post.author_id);
   // formData.append('post[media]', post.mediaFile);
   // formData.append('post[title]', post.title);
   // debugger
   return PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)))
};

export const updatePost = (post) => dispatch => (
   PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

// change postId, post
export const deletePost = (postId) => dispatch => {
   return PostAPIUtil.deletePost(postId).then(() => dispatch(removePost(postId)))
};



