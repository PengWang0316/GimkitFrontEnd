import React from 'react';
import {
  List, ListItem, Divider, ListItemText, Typography, IconButton,
} from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { pink, blueGrey } from '@material-ui/core/colors';
import parse from 'html-react-parser';

import { PostType } from '../../store/Posts/types';

interface Props {
  post: PostType;
  handleClick: (post: PostType) => void;
  handleDeleteClick: (postId: number) => void;
  handleEditCallback: (post: PostType) => void;
}

const useStyles = makeStyles({
  rootPaper: {
    width: '100%',
    padding: 15,
  },
  list: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  },
  inlineBold: {
    display: 'inline',
    fontWeight: 'bold',
  },
  itemText: {
    maxHeight: 200,
    overflow: 'hidden',
  },
  deleteBtn: {
    marginLeft: 5,
    color: pink[400],
  },
  editBtn: {
    marginLeft: 15,
    color: blueGrey[400],
  },
  icon: {
    width: 20,
    height: 20,
  },
});
const MAX_CONTENT_LENGTH = 300;
const turncate = (text: string): string => text.length < MAX_CONTENT_LENGTH ? text : `${text.slice(0, MAX_CONTENT_LENGTH)}...`;

export const PostListItem = ({
  post, handleClick, handleDeleteClick, handleEditCallback,
}: Props) => {
  const classes = useStyles({});
  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    handleDeleteClick(post.id);
  };

  const handleEdit = (event: React.MouseEvent) => {
    event.stopPropagation();
    handleEditCallback(post);
  };

  return (
    <List className={classes.list}>
      <ListItem alignItems="center" button onClick={() => handleClick(post)}>
        <ListItemText
          className={classes.itemText}
          primary={(
            <>
              <Typography
                component="span"
                variant="h6"
                className={classes.inlineBold}
                color="textPrimary"
              >
                {`${post.title} - ${new Date(post.date).toLocaleDateString()}`}
              </Typography>
              <IconButton size="small" className={classes.editBtn} onClick={handleEdit}>
                <EditIcon className={classes.icon} />
              </IconButton>
              <IconButton size="small" className={classes.deleteBtn} onClick={handleDelete}>
                <DeleteIcon className={classes.icon} />
              </IconButton>
            </>
          )}
          secondary={(
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <div>{parse(turncate(post.content))}</div>
              </Typography>
            </>
          )}
        />
      </ListItem>
      <Divider component="li" />
    </List>
  );
};

export default PostListItem;
