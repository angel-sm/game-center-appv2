/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 800,
    margin: '1em auto',
  },
}));

export const Content = (props) => {
  const classes = useStyles();

  const { children } = props;
  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        {children}
      </Grid>
    </Paper>
  );
};
