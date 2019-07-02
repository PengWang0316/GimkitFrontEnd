import axios from 'axios';

import {
  FETCH_POSTS_SUCCESS, PostsType, PostsActionType, PostType, ADD_NEW_POST_SUCCESS,
} from './types';
import { ADD_NEW_POST_API } from '../Urls';

const fetchPostsSuccess = (posts: PostsType): PostsActionType => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

const addNewPostSuccess = (post: PostType): PostsActionType => ({
  type: ADD_NEW_POST_SUCCESS,
  post,
});

export const fetchPosts = () => async (disptch) => {
  const mockPosts = [
    {
      id: 1,
      title: 'The title A for the post',
      content: `Some content to show. Since these production cuts were agreed upon in late 2016, 
      non-OPEC members like Russia have bolstered the organization's ability to influence the global 
      oil market. While OPEC controls less than 50 percent of the world's crude oil production, 
      the expanded coalition, known as "OPEC+," controls a majority.Some content to show. Since these production cuts were agreed upon in late 2016, 
      non-OPEC members like Russia have bolstered the organization's ability to influence the global 
      oil market. While OPEC controls less than 50 percent of the world's crude oil production, 
      the expanded coalition, known as "OPEC+," controls a majority.Some content to show. Since these production cuts were agreed upon in late 2016, 
      non-OPEC members like Russia have bolstered the organization's ability to influence the global 
      oil market. While OPEC controls less than 50 percent of the world's crude oil production, 
      the expanded coalition, known as "OPEC+," controls a majority.Some content to show. Since these production cuts were agreed upon in late 2016, 
      non-OPEC members like Russia have bolstered the organization's ability to influence the global 
      oil market. While OPEC controls less than 50 percent of the world's crude oil production, 
      the expanded coalition, known as "OPEC+," controls a majority.Some content to show. Since these production cuts were agreed upon in late 2016, 
      non-OPEC members like Russia have bolstered the organization's ability to influence the global 
      oil market. While OPEC controls less than 50 percent of the world's crude oil production, 
      the expanded coalition, known as "OPEC+," controls a majority.Some content to show. Since these production cuts were agreed upon in late 2016, 
      non-OPEC members like Russia have bolstered the organization's ability to influence the global 
      oil market. While OPEC controls less than 50 percent of the world's crude oil production, 
      the expanded coalition, known as "OPEC+," controls a majority.Some content to show. Since these production cuts were agreed upon in late 2016, 
      non-OPEC members like Russia have bolstered the organization's ability to influence the global 
      oil market. While OPEC controls less than 50 percent of the world's crude oil production, 
      the expanded coalition, known as "OPEC+," controls a majority.Some content to show. Since these production cuts were agreed upon in late 2016, 
      non-OPEC members like Russia have bolstered the organization's ability to influence the global 
      oil market. While OPEC controls less than 50 percent of the world's crude oil production, 
      the expanded coalition, known as "OPEC+," controls a majority.Some content to show. Since these production cuts were agreed upon in late 2016, 
      non-OPEC members like Russia have bolstered the organization's ability to influence the global 
      oil market. While OPEC controls less than 50 percent of the world's crude oil production, 
      the expanded coalition, known as "OPEC+," controls a majority.`,
      date: '09/01/2019',
    },
    {
      id: 2,
      title: 'The title B for the post',
      content: `Iran had vowed to veto the charter, given its concerns over the power wielded by 
      Saudi Arabia and Russia. But after lengthy negotiations it ultimately approved the document, 
      which Falih says contained assurances that the new charter would not supersede the original OPEC agreement.`,
      date: '08/01/2019',
    },
    {
      id: 3,
      title: 'The title C for the post',
      content: `Iran had vowed to veto the charter, given its concerns over the power wielded by 
      Saudi Arabia and Russia. But after lengthy negotiations it ultimately approved the document, 
      which Falih says contained assurances that the new charter would not supersede the original OPEC agreement.`,
      date: '08/01/2019',
    },
    {
      id: 4,
      title: 'The title D for the post',
      content: `Iran had vowed to veto the charter, given its concerns over the power wielded by 
      Saudi Arabia .`,
      date: '08/01/2019',
    },
    {
      id: 5,
      title: 'The title E for the post',
      content: `Iran had vowed to veto the charter, given its concerns over the power wielded by 
      Saudi Arabia and Russia. But after lengthy negotiations it ultimately approved the document, 
      which Falih says contained assurances that the new charter would not supersede the original OPEC agreement. 
      Iran had vowed to veto the charter, given its concerns over the power wielded by 
      Saudi Arabia and Russia. But after lengthy negotiations it ultimately approved the document, 
      which Falih says contained assurances that the new charter would not supersede the original OPEC agreement.`,
      date: '08/01/2019',
    },
    {
      id: 6,
      title: 'The title F for the post',
      content: `Iran had vowed to veto the charter, given its concerns over the power wielded by 
      Saudi Arabia and Russia. But after lengthy negotiations it ultimately approved the document, 
      which Falih says contained assurances that the new charter would not supersede the original OPEC agreement.`,
      date: '08/01/2019',
    },
  ];
  disptch(fetchPostsSuccess(mockPosts));
};

export const addNewPost = (post: PostType) => async (dispatch) => {
  const { data } = await axios.post(ADD_NEW_POST_API, { post });
  dispatch(addNewPostSuccess(data));
};

export const deletePost = () => {};
