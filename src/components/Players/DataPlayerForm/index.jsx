import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Button, Paper } from '@material-ui/core';

import useStyles from './DataPlayerForm-styles';

const DataPlayerForm = () => {
  return (
    <form onSubmit={null} className='form-container' component={Paper}>
      <FormControl className={useStyles().children}>
        <FormControl className={useStyles().children}>
          <TextField
            name='organizer'
            label='Nombre del jugador'
            variant='outlined'
            className={useStyles().textField}
          />
        </FormControl>
        <FormControl className={useStyles().children}>
          <TextField
            name='cost'
            label='Nickname'
            variant='outlined'
            className={useStyles().textField}
          />
        </FormControl>
      </FormControl>
      <Button
        variant='contained'
        color='primary'
        type='submit'
        size='large'
      >
        Agregar Datos
      </Button>
    </form>
  );
};

export default DataPlayerForm;
