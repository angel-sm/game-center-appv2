/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));
export const RemoveButton = (props) => {
  const classes = useStyles();

  return (
    <Button variant='contained' color='primary' className={classes.margin}>
      Archivar
    </Button>
  );
};
