import React, {
  memo, useEffect, useCallback, useState,
} from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import I18n from '@kevinwang0316/i18n';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@kevinwang0316/react-materialui-pagination';

import ReadDialog from './Dialogs/ReadDialog';
import PostListItem from './PostListItem';
import { AppState } from '../../store/ConfigureStore';
import { PostsType, PostType } from '../../store/Posts/types';
import { PostCountType } from '../../store/PostCount/types';
import { fetchPosts as fetchPostsAction } from '../../store/Posts/actions';
import { fetchPostCount as fetchPostCountAction } from '../../store/PostCount/actions';
import { MAX_POSTS_AMOUNT } from '../../config';
import DeleteConfirmDialog from './Dialogs/DeleteConfirmDialog';
import SuccessMessageSnackbar from '../SuccessMessageSnackbar';
import AddPostDialog from '../AddPostDialog';

interface Props {
  posts: PostsType;
  postCount: PostCountType;
  fetchPosts: (offset: number, limit: number) => void;
  fetchPostCount: Function;
}

const useStyles = makeStyles({
  rootPaper: {
    width: '100%',
    padding: 15,
  },
  paginationDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export const PostList = ({
  posts = null, postCount = null, fetchPosts, fetchPostCount,
}: Props) => {
  const [isOpenRead, setIsOpenRead] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [currentPost, setCurrentPost] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);
  const [offset, setOffset] = useState(0);
  const classes = useStyles({});

  // Initial fetching
  useEffect(() => {
    if (!posts) fetchPosts(0, MAX_POSTS_AMOUNT);
    if (postCount === null) fetchPostCount();
  });

  // callback for the reading dialog display
  const handleReadingClose = () => setIsOpenRead(state => !state);

  // callback for the deletion confirm dialog display
  const handleDeleteClose = () => setIsOpenDelete(state => !state);

  const handleSnackbarClose = () => setIsOpenSnackbar(state => !state);

  const handleEditDialogClose = () => setIsOpenEditDialog(state => !state);

  const handleSnackBarCallback = (text: string) => {
    setSnackbarMessage(text);
    handleSnackbarClose();
  };

  const handleEditCallback = (post: PostType) => {
    setCurrentPost(post);
    handleEditDialogClose();
  };

  // callback for click each item
  const itemClickCallback = useCallback((post: PostType) => {
    setCurrentPost(post);
    handleReadingClose();
  }, []);

  // callback for the pagination button click
  const handlePaginationClick = useCallback((newOffset: number) => {
    fetchPosts(newOffset, MAX_POSTS_AMOUNT);
    setOffset(newOffset);
  }, []);

  const handleDeleteClickCallback = (postId: number) => {
    setCurrentPostId(postId);
    handleDeleteClose();
  };

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
          handleDeleteClick={handleDeleteClickCallback}
          handleEditCallback={handleEditCallback}
        />
      ))}
      {postCount && (
        <div className={classes.paginationDiv}>
          <Pagination
            offset={offset}
            limit={MAX_POSTS_AMOUNT}
            total={postCount}
            onClick={handlePaginationClick}
          />
        </div>
      )}
      <ReadDialog
        post={currentPost}
        isOpen={isOpenRead}
        handleClose={handleReadingClose}
      />
      <DeleteConfirmDialog
        postId={currentPostId}
        isOpen={isOpenDelete}
        handleClose={handleDeleteClose}
        handleSnackBarCallback={handleSnackBarCallback}
      />
      <AddPostDialog
        isOpen={isOpenEditDialog}
        handleClose={handleEditDialogClose}
        post={currentPost}
      />
      <SuccessMessageSnackbar
        isOpen={isOpenSnackbar}
        message={snackbarMessage}
        handleClose={handleSnackbarClose}
      />
    </div>
  );
};

/* istanbul ignore next */
const mapStateToProps = ({ posts, postCount }: AppState) => ({ posts, postCount });
/* istanbul ignore next */
const mapDispatchToProps = { fetchPostCount: fetchPostCountAction, fetchPosts: fetchPostsAction };
export default connect(mapStateToProps, mapDispatchToProps)(memo(PostList));
