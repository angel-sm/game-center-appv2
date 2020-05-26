/* eslint-disable no-use-before-define */
import React from 'react';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import useStyles from './SearchBar-styles';

import('./SearchTournament.scss');

const submitHandler = () => {
  console.log('enviar');
};

export default function SearchTournament() {
  return (
    <form onSubmit={submitHandler} className='Tournament-form-content'>
      <FormControl className={useStyles().children}>
        <TextField
          id='date'
          label='Fecha del torneo'
          type='date'
          className={useStyles().textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
      <Button variant='contained' color='primary' type='submit'>Buscar torneo</Button>
    </form>
  );
};
