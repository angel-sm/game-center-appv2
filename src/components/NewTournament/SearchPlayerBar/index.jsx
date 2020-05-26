/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

import { competitors } from '../../../utils/mokups';
import useSetInputValue from '../../../hooks/useSetInputValue';
import useStyles from './SearchPlayerBar-styles';

import('./SearchPlayerBar.scss');

export default function SearchPlayerBar() {
  const [value, setValue] = React.useState('');

  const inputHandler = useSetInputValue({
    player: '',
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputHandler.form.player === '') {
      inputHandler.form.player = value;
    }
  };

  return (
    <form onSubmit={submitHandler} className='Player-form-content'>
      <FormControl className={useStyles().children}>
        <Autocomplete
          freeSolo
          id='free-solo-2-demo'
          disableClearable
          name='player'
          // eslint-disable-next-line react/jsx-props-no-spreading
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
          options={competitors.map((option) => option.nickname)}
          renderInput={(params) => (
            <TextField
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...params}
              label='Buscar jugador'
              margin='normal'
              variant='outlined'
              name='player'
              InputProps={{ ...params.InputProps, type: 'search' }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...inputHandler}
            />
          )}
        />
      </FormControl>
      <Button variant='contained' color='primary' type='submit'>Agregar jugador</Button>
    </form>
  );
};
