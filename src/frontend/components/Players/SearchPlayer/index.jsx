/* eslint-disable no-const-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { FormControl, Button } from '@material-ui/core';
import { getAllPlayersRequest, searchPlayerRequest } from '../../../actions/players';
import useInputHandler from '../../../hooks/useInputHandler';

const SearchPlayer = (props) => {

  const hanlderInput = useInputHandler({
    player: '',
  });

  const handleSearch = (event) => {
    event.preventDefault();

    console.log(hanlderInput.form.player);

    props.searchPlayerRequest(hanlderInput.form.player);
    return true;
  };

  return (
    <form onSubmit={handleSearch}>
      <FormControl>
        <TextField id='standard-basic' label='Nickname del jugador' {...hanlderInput} name='player' />
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
