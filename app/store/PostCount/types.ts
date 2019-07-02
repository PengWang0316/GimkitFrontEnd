export const FETCH_POST_COUNT_SUCCESS = 'fetchPostCountSuccess';

export type PostCountType = number | null;

export interface PostCountActionType {
  type: string;
  postCount: PostCountType;
}
