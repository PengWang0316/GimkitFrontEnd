export const FETCH_POST_COUNT_SUCCESS = 'fetchPostCountSuccess';
export const REDUCE_ONE_COUNT_SUCCESS = 'reduceOneCountSuccess';
export const ADD_ONE_COUNT_SUCCESS = 'addOneCountSuccess';

export type PostCountType = number | null;

export interface PostCountActionType {
  type: string;
  postCount: PostCountType;
}
