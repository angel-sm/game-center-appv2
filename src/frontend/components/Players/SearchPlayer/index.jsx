/* eslint-disable no-const-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { FormControl, Button } from '@material-ui/core';
import { getAllPlayersRequest, searchPlayerRequest } from '../../../actions/players';
import useInputHandler from '../../../hooks/useInputHandler';

const SearchPlayer = (props) => {

  const [value, setValue] = useState('');

  const hanlderInput = useInputHandler({
    player: '',
  });

  useEffect(() => {
    props.getAllPlayersRequest();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    if (value === '') {
      return false;
    }

    hanlderInput.form.player = value;
    console.log(value, hanlderInput.form.player);

    props.searchPlayerRequest(hanlderInput.form.player.id);
    setValue('');
  };

  return (
    <form onSubmit={handleSearch}>
      <FormControl>
        <Autocomplete
          id='country-select-demo'
          options={props.players.players}
          autoHighlight
          name='player'
          style={{ width: 300 }}
          getOptionLabel={(option) => option.nickname}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Selecciona un jugador'
              variant='outlined'
              name='player'
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      </FormControl>
      <Button variant='contained' color='primary' disableElevation type='submit'>buscar jugador</Button>
    </form>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  getAllPlayersRequest,
  searchPlayerRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(SearchPlayer);
