import * as APIUtil from "../util/comment_util";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const fetchComments = () => dispatch =>
  APIUtil.fetchComments().then(comments => dispatch(receiveComments(comments)));

export const fetchComment = commentId => dispatch =>
  APIUtil.fetchComment(commentId).then(comment =>
    dispatch(receiveComment(comment))
  );

export const removeComment = commentId => ({
  type: { type: REMOVE_COMMENT },
  commentId
});

export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment).then(comment =>
    dispatch(receiveComment(comment))
  );
};
export const deleteComment = commentId => dispatch => {
  return APIUtil.deleteComment(commentId).then(() =>
    dispatch(removeComment(commentId))
  );
};
