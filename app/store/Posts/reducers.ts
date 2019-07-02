import {
  FETCH_POSTS_SUCCESS, ADD_NEW_POST_SUCCESS, PostsType, PostsActionType,
} from './types';

const Posts = (state = null, { type, posts, post }: PostsActionType): PostsType => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return posts;
    case ADD_NEW_POST_SUCCESS:
      return [post, ...state];
    default:
      return state;
  }
};
export default Posts;
