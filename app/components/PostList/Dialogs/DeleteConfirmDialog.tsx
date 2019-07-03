import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button,
} from '@material-ui/core';
import I18n from '@kevinwang0316/i18n';

import { deletePost as deletePostAction } from '../../../store/Posts/actions';

interface Props {
  isOpen: boolean;
  postId: number;
  handleSnackBarCallback: (text: string) => void;
  handleCloseCallback: (event: React.MouseEvent) => void;
  deletePost: (postId: number) => void;
}

export const DeleteConfirmDialog = ({
  isOpen, handleCloseCallback, postId, handleSnackBarCallback, deletePost,
}: Props) => {
  const handleDelete = useCallback(() => {
    deletePost(postId);
    handleCloseCallback(null);
    handleSnackBarCallback(I18n('deletePostSuccess'));
  }, [postId]);
  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseCallback}
    >
      <DialogTitle>{I18n.get('deleteDialogTitle')}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {I18n.get('deleteDialogContent')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseCallback} color="primary">
          {I18n.get('cancel')}
        </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          {I18n.get('delete')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const mapDispatchToProps = ({
  deletePost: deletePostAction,
});
export default connect(null, mapDispatchToProps)(DeleteConfirmDialog);
