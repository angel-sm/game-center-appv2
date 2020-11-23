/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useInputHandler from '../../../hooks/useInputHandler';
import { registerPlayerRequest } from '../../../actions/players';
import { useStyles, Form } from './styles';

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
      <Toolbar>
        <Typography variant='h6' id='tableTitle' component='div'>
          Agregar un jugador nuevo
        </Typography>
      </Toolbar>
      <Form>
        <TextField className={classes.child} label='Nombre' name='name' {...handleInput} />
        <TextField className={classes.child} label='Apellidos' name='lastName' {...handleInput} />
        <TextField className={classes.child} label='Email' name='email' {...handleInput} />
        <TextField className={classes.child} label='Nickname' name='nickname' {...handleInput} />
        <Button className={classes.child} onClick={handleSubmit} color='primary' variant='contained'>
          Registrar jugador
        </Button>
      </Form>
    </Paper>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  registerPlayerRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
