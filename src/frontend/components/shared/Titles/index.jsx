import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

import useStyles from './Titles.styles';

const Titles = ({ title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h4' color='textSecondary'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Titles;

