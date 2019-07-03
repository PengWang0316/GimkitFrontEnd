import axios from 'axios';

import { FETCH_POST_COUNT_SUCCESS, PostCountType, PostCountActionType } from './types';
import { FETCH_POST_COUNT_API } from '../Urls';

const fetchPostCountSuccess = (postCount: PostCountType): PostCountActionType => ({
  type: FETCH_POST_COUNT_SUCCESS,
  postCount,
});

export const fetchPostCount = () => async (disptch) => {
  const { data } = await axios.get(FETCH_POST_COUNT_API);
  disptch(fetchPostCountSuccess(data));
};
export default fetchPostCount;
