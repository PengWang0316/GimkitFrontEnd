import {
  FETCH_POSTS_SUCCESS, ADD_NEW_POST_SUCCESS, PostsType, PostsActionType, DELETE_POST_SUCCESS,
} from './types';

const Posts = (state: PostsType = null, {
  type, posts, post, postId,
}: PostsActionType): PostsType => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return posts;
    case ADD_NEW_POST_SUCCESS:
      return [post, ...state];
    case DELETE_POST_SUCCESS: {
      const newPosts = [];
      state.forEach((item) => {
        if (item.id !== postId) newPosts.push(item);
      });
      return newPosts;
    }
    default:
      return state;
  }
};
export default Posts;
