import { FETCH_POST_COUNT_SUCCESS, PostCountType, PostCountActionType } from './types';

const PostCount = (state = null, { type, postCount }: PostCountActionType): PostCountType => {
  switch (type) {
    case FETCH_POST_COUNT_SUCCESS:
      return postCount;
    default:
      return state;
  }
};
export default PostCount;
