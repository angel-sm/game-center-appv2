/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { competitors } from '../../utils/mokups';

export default function FreeSolo() {
  return (
    <form onSubmit={submitHandler}>
      <Autocomplete
        freeSolo
        id='free-solo-2-demo'
        disableClearable
        options={competitors.map((option) => option.nickname)}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label='Buscar jugador'
            margin='normal'
            variant='outlined'
            name='USER'
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
