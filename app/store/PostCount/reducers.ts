import {
  FETCH_POST_COUNT_SUCCESS, PostCountType, PostCountActionType,
  ADD_ONE_COUNT_SUCCESS, REDUCE_ONE_COUNT_SUCCESS,
} from './types';

const PostCount = (state = null, { type, postCount }: PostCountActionType): PostCountType => {
  switch (type) {
    case FETCH_POST_COUNT_SUCCESS:
      return postCount;
    case ADD_ONE_COUNT_SUCCESS:
      return state + 1;
    case REDUCE_ONE_COUNT_SUCCESS:
      return state - 1;
    default:
      return state;
  }
};
export default PostCount;
