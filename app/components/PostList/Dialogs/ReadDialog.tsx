import React, { Fragment, memo } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import I18n from '@kevinwang0316/i18n';
// Sanitaize the content
import parse from 'html-react-parser';

import { PostType } from '../../../store/Posts/types';

interface Props {
  post: PostType;
  isOpen: boolean;
  handleClose: (event: React.MouseEvent) => void;
}

export const ReadDialog = ({ post, handleClose, isOpen = false }: Props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="readDialogTitle"
      maxWidth="md"
      fullWidth
    >
      {!post && <Fragment>{I18n.get('emptyContent')}</Fragment>}
      {post && (
        <Fragment>
          <DialogTitle id="readDialogTitle">{`${post.title} - ${new Date(post.date).toLocaleDateString()}`}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {parse(post.content)}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {I18n.get('close')}
            </Button>
          </DialogActions>
        </Fragment>
      )}
    </Dialog>
  );
};

export default memo(ReadDialog);
