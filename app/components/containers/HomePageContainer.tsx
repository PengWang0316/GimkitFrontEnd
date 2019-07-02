import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

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
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0 30px 0',
    flexWrap: 'wrap',
    '& > div': {
      marginBottom: 10,
    },
  },
  rootDiv: {
    paddingLeft: 50,
  },
});

const HomePage = ({
  posts = null, postCount = null, fetchPosts, fetchPostCount,
}: Props) => {
  const classes = useStyles({});
  useEffect(() => {
    if (!posts) fetchPosts(0);
    if (!postCount) fetchPostCount();
  });

  return (
    <div className={classes.rootDiv}>
      aaa
    </div>

  );
};

/* istanbul ignore next */
const mapStateToProps = ({ posts, postCount }: AppState) => ({ posts, postCount });
/* istanbul ignore next */
const mapDispatchToProps = { fetchPostCount: fetchPostCountAction, fetchPosts: fetchPostsAction };
export default connect(mapStateToProps, mapDispatchToProps)(memo(HomePage));
