/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { FormControl, TextField, Button } from '@material-ui/core';
import useInputHandler from '../../../hooks/useInputHandler';
import { registerPlayerRequest } from '../../../actions/players';

const Form = (props) => {
  const handleInput = useInputHandler({
    name: '',
    nickname: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerPlayerRequest(handleInput.form);
    window.location.href = '/players';
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <TextField label='Nombre del jugador' name='name' {...handleInput} />
      </FormControl>
      <FormControl>
        <TextField label='Nickname del jugador' name='nickname' {...handleInput} />
      </FormControl>
      <FormControl>
        <Button variant='contained' color='primary' disableElevation type='submit'>Registrar jugador</Button>
      </FormControl>
    </form>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  registerPlayerRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(Form);
