import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import I18n from '@kevinwang0316/i18n';

import PostList from '../PostList';

const useStyles = makeStyles({
  rootPaper: {
    margin: '50px auto 10px auto',
    width: '80%',
    padding: 15,
  },
});

const HomePage = () => {
  const classes = useStyles({});
  return (
    <Paper className={classes.rootPaper}>
      <PostList />
    </Paper>
  );
};

export default memo(HomePage);
