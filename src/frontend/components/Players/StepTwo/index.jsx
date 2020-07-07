/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react';
import {
  FormControl,
  Button,
  TextField,
} from '@material-ui/core';

import useStyles from './StepOne.styles';

const StepTwo = () => {

  return (
    <form>
      <FormControl className={useStyles().children}>
        <TextField id='outlined-basic' label='Nombres' variant='outlined' />
      </FormControl>
      <FormControl className={useStyles().children}>
        <TextField id='outlined-basic' label='Apellidos' variant='outlined' />
      </FormControl>
      <FormControl className={useStyles().children}>
        <TextField id='outlined-basic' label='Nickname' variant='outlined' />
      </FormControl>
      <FormControl className={useStyles().children}>
        <Button variant='contained' color='primary'>
          Agregar datos
        </Button>
      </FormControl>
    </form>
  );
};

export default StepTwo;
