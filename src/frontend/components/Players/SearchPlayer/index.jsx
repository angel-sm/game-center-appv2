/* eslint-disable no-const-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { FormControl, Button } from '@material-ui/core';
import { getAllPlayersRequest, searchPlayerRequest } from '../../../actions/players';
import useInputHandler from '../../../hooks/useInputHandler';
import { TypeSearch } from './components/TypeSearch';
import { setErrorRequest } from '../../../actions/status';

const SearchPlayer = (props) => {

  const hanlderInput = useInputHandler({
    player: '',
  });

  useEffect(() => {
    setTimeout(() => {
      props.setErrorRequest('');
    }, 3500);
  }, [props.status.error]);

  const [type, setType] = useState('name');

  const handleChange = (event) => {
    setType(event.target.value);
    hanlderInput.form.player = '';
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.searchPlayerRequest(hanlderInput.form.player, type);
    return true;
  };

  return (
    <>
      <TypeSearch handleChange={handleChange} value={type} />
      <form onSubmit={handleSearch}>
        <FormControl>
          {props.status.error !== '' ? (
            <TextField error helperText={`${props.status.error}`} value={hanlderInput.form.player} />
          ) : <TextField id='standard-basic' {...hanlderInput} name='player' value={hanlderInput.form.player} />}
        </FormControl>
        {
          hanlderInput.form.player !== '' ? (
            <Button
              variant='contained'
              color={props.status.error !== '' ? 'secondary' : 'primary'}
              disableElevation
              type='submit'
            >
              buscar
            </Button>
          ) : (
            <Button
              variant='outlined'
              disabled
            >
              buscar
            </Button>
          )
        }
      </form>
    </>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  getAllPlayersRequest,
  searchPlayerRequest,
  setErrorRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(SearchPlayer);
