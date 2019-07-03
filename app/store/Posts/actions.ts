import axios from 'axios';

import {
  FETCH_POSTS_SUCCESS, PostsType, PostsActionType, PostType, ADD_NEW_POST_SUCCESS,
} from './types';
import { ADD_NEW_POST_API, FETCH_POSTS_API } from '../Urls';

const fetchPostsSuccess = (posts: PostsType): PostsActionType => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

const addNewPostSuccess = (post: PostType): PostsActionType => ({
  type: ADD_NEW_POST_SUCCESS,
  post,
});

export const fetchPosts = (offset: number, limit: number) => async (disptch) => {
  const { data } = await axios.get(FETCH_POSTS_API, { params: { offset, limit } });
  disptch(fetchPostsSuccess(data));
};

export const addNewPost = (post: PostType) => async (dispatch) => {
  const { data } = await axios.post(ADD_NEW_POST_API, { post });
  dispatch(addNewPostSuccess(data));
};

export const deletePost = () => {};
