/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={1} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 'auto',
  },
}));

const NotifyBar = ({ message }) => {
  const classes = useStyles();
  return (
    <>
      <Alert severity='error' className={classes.root}>
        {message}
      </Alert>
    </>
  );
};

export default NotifyBar;

