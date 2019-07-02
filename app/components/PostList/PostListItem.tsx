import React, { Fragment } from 'react';
import {
  List, ListItem, Divider, ListItemText, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
});
const MAX_CONTENT_LENGTH = 300;
const turncate = (text: string): string => text.length < MAX_CONTENT_LENGTH ? text : `${text.slice(0, MAX_CONTENT_LENGTH)}...`;

export const PostListItem = ({ post, handleClick }: Props) => {
  const classes = useStyles({});

  return (
    <List className={classes.list}>
      <ListItem alignItems="center" button onClick={() => handleClick(post)}>
        <ListItemText
          primary={(
            <Typography
              component="span"
              variant="h6"
              className={classes.inlineBold}
              color="textPrimary"
            >
              {`${post.title} - ${post.date}`}
            </Typography>
          )}
          secondary={(
            <Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {turncate(post.content)}
              </Typography>
            </Fragment>
          )}
        />
      </ListItem>
      <Divider component="li" />
    </List>
  );
};

export default PostListItem;
