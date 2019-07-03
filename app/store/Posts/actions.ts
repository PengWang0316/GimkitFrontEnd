import axios from 'axios';

import {
  FETCH_POSTS_SUCCESS, PostsType, PostsActionType, UPDATE_POST_SUCCESS,
  PostType, ADD_NEW_POST_SUCCESS, DELETE_POST_SUCCESS,
} from './types';
import {
  ADD_NEW_POST_API, FETCH_POSTS_API, DELETE_POST_API, UPDATE_POST_API,
} from '../Urls';
import { addOneCount, reduceOneCount } from '../PostCount/actions';

const fetchPostsSuccess = (posts: PostsType): PostsActionType => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

const addNewPostSuccess = (post: PostType): PostsActionType => ({
  type: ADD_NEW_POST_SUCCESS,
  post,
});

const updatePostSuccess = (post: PostType): PostsActionType => ({
  type: UPDATE_POST_SUCCESS,
  post,
});

const deletePostSuccess = (postId: number): PostsActionType => ({
  type: DELETE_POST_SUCCESS,
  postId,
});

export const fetchPosts = (offset: number, limit: number) => async (disptch) => {
  const { data } = await axios.get(FETCH_POSTS_API, { params: { offset, limit } });
  disptch(fetchPostsSuccess(data));
};

export const addNewPost = (post: PostType) => async (dispatch) => {
  const { data } = await axios.post(ADD_NEW_POST_API, { post });
  dispatch(addNewPostSuccess(data));
  dispatch(addOneCount());
};

export const updatePost = (post: PostType) => async (dispatch) => {
  await axios.put(UPDATE_POST_API, { post });
  dispatch(updatePostSuccess(post));
};

export const deletePost = (postId: number) => (dispatch) => {
  axios.delete(DELETE_POST_API, { params: { id: postId } });
  dispatch(deletePostSuccess(postId));
  dispatch(reduceOneCount());
};
