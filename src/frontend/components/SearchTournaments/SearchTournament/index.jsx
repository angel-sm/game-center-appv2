/* eslint-disable no-const-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { FormControl, Button } from '@material-ui/core';
import { searchTournamentRequest, searchResult } from '../../../actions/tournaments';
import useInputHandler from '../../../hooks/useInputHandler';
import TournamentResult from '../TournamentResult';

const SearchTournament = (props) => {

  const hanlderInput = useInputHandler({
    tournament: '',
    game: '',
  });

  useEffect(() => {
    props.searchResult([]);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    props.searchTournamentRequest(hanlderInput.form);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <FormControl>
          <TextField id='standard-basic' label='Nombre del torneo' {...hanlderInput} name='tournament' />
        </FormControl>
        <FormControl>
          <TextField id='standard-basic' label='Juego' {...hanlderInput} name='game' />
        </FormControl>
        <Button variant='contained' color='primary' disableElevation type='submit'>buscar torneo</Button>
      </form>
      {
        props.tournaments.searchResult.length > 0 ? <TournamentResult tournament={props.tournaments.searchResult} /> : null
      }
    </>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  searchTournamentRequest,
  searchResult,
};

export default connect(mapStateToProps, dispatchStateToProps)(SearchTournament);
