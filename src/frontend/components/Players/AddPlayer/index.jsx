/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Paper,
  TextField,
} from '@material-ui/core';
import useInputHandler from '../../../hooks/useInputHandler';
import { registerPlayerRequest } from '../../../actions/players';
import useStyles from './styles';

const AddPlayer = (props) => {
  const { redirect } = props;
  const classes = useStyles();

  const handleInput = useInputHandler({
    name: '',
    nickname: '',
    lastName: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerPlayerRequest(handleInput.form);
    window.location.href = redirect;
  };

  return (
    <Paper className={classes.root}>
      <form>
        <TextField label='Nombre' name='name' {...handleInput} />
        <TextField label='Apellidos' name='lastName' {...handleInput} />
        <TextField label='Email' name='email' {...handleInput} />
        <TextField label='Nickname' name='nickname' {...handleInput} />
        <Button onClick={handleSubmit} color='primary' variant='contained'>
          Registrar jugador
        </Button>
      </form>
    </Paper>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  registerPlayerRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
