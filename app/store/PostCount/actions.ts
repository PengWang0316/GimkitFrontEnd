import axios from 'axios';

import {
  FETCH_POST_COUNT_SUCCESS, PostCountType, PostCountActionType,
  ADD_ONE_COUNT_SUCCESS, REDUCE_ONE_COUNT_SUCCESS,
} from './types';
import { FETCH_POST_COUNT_API } from '../Urls';

const fetchPostCountSuccess = (postCount: PostCountType): PostCountActionType => ({
  type: FETCH_POST_COUNT_SUCCESS,
  postCount,
});

export const fetchPostCount = () => async (disptch) => {
  const { data } = await axios.get(FETCH_POST_COUNT_API);
  disptch(fetchPostCountSuccess(data));
};

export const addOneCount = () => ({
  type: ADD_ONE_COUNT_SUCCESS,
});

export const reduceOneCount = () => ({
  type: REDUCE_ONE_COUNT_SUCCESS,
});

export default fetchPostCount;
