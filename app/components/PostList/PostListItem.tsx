import React from 'react';
import {
  List, ListItem, Divider, ListItemText, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'html-react-parser';

import { PostType } from '../../store/Posts/types';

interface Props {
  post: PostType;
  handleClick: (post: PostType) => void;
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
});
const MAX_CONTENT_LENGTH = 300;
const turncate = (text: string): string => text.length < MAX_CONTENT_LENGTH ? text : `${text.slice(0, MAX_CONTENT_LENGTH)}...`;

export const PostListItem = ({ post, handleClick }: Props) => {
  const classes = useStyles({});

  return (
    <List className={classes.list}>
      <ListItem alignItems="center" button onClick={() => handleClick(post)}>
        <ListItemText
          className={classes.itemText}
          primary={(
            <Typography
              component="span"
              variant="h6"
              className={classes.inlineBold}
              color="textPrimary"
            >
              {`${post.title} - ${new Date(post.date).toLocaleDateString()}`}
            </Typography>
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
