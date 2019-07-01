import { FETCH_POSTS_SUCCESS, PostsType, PostsActionType } from './types';

const Posts = (state = null, { type, posts }: PostsActionType): PostsType => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return posts;
    default:
      return state;
  }
};
export default Posts;
