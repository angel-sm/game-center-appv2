import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import deepOrange from '@material-ui/core/colors/deepOrange';

const useStyles = makeStyles((theme) => ({
  backgroun: {
    backgroundColor: deepOrange[500],
  },
}));


const HelloWorld = () => {
  const classes = useStyles();

  return (
    <Button variant='contained' className={classes.backgroun}>
      Hola Mundo!
    </Button>
  );
};


export default HelloWorld;
