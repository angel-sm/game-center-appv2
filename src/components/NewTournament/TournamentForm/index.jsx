import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Button, Paper } from '@material-ui/core';

import useStyles from './TournamentForm-styles';

import('./TournamentForm.scss');

const TournamentForm = ({ step }) => {
  return (
    <form onSubmit={null} className='Tournament-form-container' component={Paper}>
      <FormControl className={useStyles().children}>
        <FormControl className={useStyles().children}>
          <TextField
            name='organizer'
            label='Nombre del torneo'
            variant='outlined'
            className={useStyles().textField}
          />
        </FormControl>
        <FormControl className={useStyles().children}>
          <TextField
            label='Comienza'
            type='date'
            variant='outlined'
            name='start'
            className={useStyles().textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <FormControl className={useStyles().children}>
          <TextField
            label='Termina'
            type='date'
            variant='outlined'
            name='end'
            className={useStyles().textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <FormControl className={useStyles().children}>
          <TextField
            name='cost'
            label='Costo'
            variant='outlined'
            className={useStyles().textField}
          />
        </FormControl>
        <FormControl className={useStyles().children}>
          <TextField
            name='organizer'
            label='Organizador'
            variant='outlined'
            className={useStyles().textField}
          />
        </FormControl>
        <FormControl className={useStyles().children}>
          <TextField
            label='Juego'
            name='game'
            variant='outlined'
            className={useStyles().textField}
          />
        </FormControl>
        <FormControl className={useStyles().children}>
          <TextField
            label='Descripcion'
            name='description'
            placeholder='Descripcion'
            multiline
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
        Agregar torneo
      </Button>
    </form>
  );
};

export default TournamentForm;
