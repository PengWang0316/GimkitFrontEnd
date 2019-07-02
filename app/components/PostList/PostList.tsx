import React, { memo, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Typography, Paper } from '@material-ui/core';
import I18n from '@kevinwang0316/i18n';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@kevinwang0316/react-materialui-pagination';

import PostListItem from './PostListItem';
import { AppState } from '../../store/ConfigureStore';
import { PostsType } from '../../store/Posts/types';
import { PostCountType } from '../../store/PostCount/types';
import { fetchPosts as fetchPostsAction } from '../../store/Posts/actions';
import { fetchPostCount as fetchPostCountAction } from '../../store/PostCount/actions';
import { MAX_POSTS_AMOUNT } from '../../config';

interface Props {
  posts: PostsType;
  postCount: PostCountType;
  fetchPosts: (offset: number) => void;
  fetchPostCount: Function;
}

const useStyles = makeStyles({
  rootPaper: {
    width: '100%',
    padding: 15,
  },
});

export const PostList = ({
  posts = null, postCount = null, fetchPosts, fetchPostCount,
}: Props) => {
  const classes = useStyles({});
  useEffect(() => {
    if (!posts) fetchPosts(0);
    if (postCount === null) fetchPostCount();
  });

  const itemClickCallback = useCallback((postId: number) => console.log(postId), []);

  return (
    <div className={classes.rootPaper}>
      <Typography variant="h5" component="h4">
        {I18n.get('postListTitle')}
      </Typography>
      {posts && posts.map(post => (
        <PostListItem
          key={post.id}
          post={post}
          handleClick={itemClickCallback}
        />
      ))}
      {/* {postCount && (
        <Pagination
          offset={offset}
          limit={MAX_POSTS_AMOUNT}
          total={postCount}
          onClick={onPageNumberClick}
        />
      )} */}
    </div>
  );
};

/* istanbul ignore next */
const mapStateToProps = ({ posts, postCount }: AppState) => ({ posts, postCount });
/* istanbul ignore next */
const mapDispatchToProps = { fetchPostCount: fetchPostCountAction, fetchPosts: fetchPostsAction };
export default connect(mapStateToProps, mapDispatchToProps)(memo(PostList));