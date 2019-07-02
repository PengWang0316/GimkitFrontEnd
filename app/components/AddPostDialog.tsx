import React, { memo, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,
} from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import I18n from '@kevinwang0316/i18n';
import ReactQuill from 'react-quill';

import { PostType } from '../store/Posts/types';
import { addNewPost as addNewPostAction } from '../store/Posts/actions';

// Css for Quill editor
require('react-quill/dist/quill.snow.css');

interface Props {
  isOpen: boolean;
  handleClose: (event: React.MouseEvent) => void;
  addNewPost: (post: PostType) => void;
}

const useStyles = makeStyles({
  editor: {
    height: 300,
    paddingBottom: 40,
    width: '100%',
  },
  title: {
    width: '100%',
    marginBottom: 20,
  },
});

export const AddPostDialog = ({ handleClose, isOpen = false, addNewPost }: Props) => {
  const classes = useStyles({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isSaveAvailable, setIsSaveAvailable] = useState(false);

  // handle content change
  const handleContentChange = useCallback((value: string, delta, source, editor) => {
    setContent(value);
    setIsSaveAvailable(title.length !== 0 && editor.getText().length !== (0 || 1));
  }, [content, title]);

  // handle title change
  const handleTitleChange = useCallback((event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setTitle((event.target as HTMLInputElement).value);
    setIsSaveAvailable(content.length !== 0 && value.length !== 0);
  }, [content, title]);

  // handle click save button
  const handleSave = () => {
    const post: PostType = { title, content };
    addNewPost(post);
    setTitle('');
    setContent('');
    handleClose(null);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="addPostDialogTitle"
      maxWidth="md"
    >
      <DialogTitle id="addPostDialogTitle">{I18n.get('addPostTitle')}</DialogTitle>
      <DialogContent>
        <TextField
          label={I18n.get('title')}
          className={classes.title}
          margin="dense"
          value={title}
          onChange={handleTitleChange}
        />
        <ReactQuill value={content} onChange={handleContentChange} className={classes.editor} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="secondary" disabled={!isSaveAvailable}>
          {I18n.get('save')}
        </Button>
        <Button onClick={handleClose} color="primary">
          {I18n.get('cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  addNewPost: (post: PostType) => dispatch(addNewPostAction(post)),
});
export default connect(null, mapDispatchToProps)(memo(AddPostDialog));
