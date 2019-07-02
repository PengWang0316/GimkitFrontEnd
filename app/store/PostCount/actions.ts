import { FETCH_POST_COUNT_SUCCESS, PostCountType, PostCountActionType } from './types';

const fetchPostCountSuccess = (postCount: PostCountType): PostCountActionType => ({
  type: FETCH_POST_COUNT_SUCCESS,
  postCount,
});

export const fetchPostCount = () => async (disptch) => {
  disptch(fetchPostCountSuccess(10));
};
export default fetchPostCount;
