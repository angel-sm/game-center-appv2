/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  FormControl,
  TextField,
  Button,
} from '@material-ui/core';

import useStyles from './SearchPlayer.styles';

import { Competitors } from '../../../utils/mokups';

const SearchPlayer = () => {
  const classes = useStyles();
  return (
    <form>
      <FormControl className={classes.children}>
        <Autocomplete
          id='combo-box-demo'
          options={Competitors}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params} label='Buscar jugador' variant='outlined' />}
        />
      </FormControl>
      <FormControl className={useStyles().children}>
        <Button variant='contained' color='primary'>
          Buscar
        </Button>
      </FormControl>
    </form>
  );
};

export default SearchPlayer;
