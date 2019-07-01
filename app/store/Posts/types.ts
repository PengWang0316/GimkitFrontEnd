export const FETCH_POSTS_SUCCESS = 'fetchPostsSuccess';

export interface PostType {
  id: number;
  title: string;
  date: string;
  content: string;
}

export type PostsType = PostType[] | null;

export interface PostsActionType {
  type: string;
  posts?: PostsType;
}
