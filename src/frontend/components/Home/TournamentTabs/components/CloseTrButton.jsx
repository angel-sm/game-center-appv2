/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

export const CloseTrButton = () => {
  const classes = useStyles();
  return (
    <Button variant='contained' color='primary' className={classes.margin}>
      Cerrar torneo
    </Button>
  );
};
