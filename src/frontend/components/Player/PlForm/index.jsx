/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';

import { Grid, TextField, makeStyles, Button } from '@material-ui/core';

import useInputHandlers from '../../../hooks/useInputHandler';
import { rqNewPlayer } from '../../../redux/actions/players';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PlForm = (props) => {

  const classes = useStyles();
  const useInputHandler = useInputHandlers({
    'player_name': '',
    'name': '',
    'last_name': '',
    'email': '',
  });

  const submitHandler = () => {
    props.rqNewPlayer(useInputHandler.form);
    window.location.href = '/players';
  };

  return (
    <>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          spacing={3}
          wrap='nowrap'
        >
          <Grid item xs={12} sm={12} lg={6} variant='standard'>
            <TextField
              fullWidth
              className={classes.input}
              variant='outlined'
              id='Nombre'
              name='name'
              {...useInputHandler}
              label='Nombre'
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} variant='standard'>
            <TextField
              fullWidth
              className={classes.input}
              variant='outlined'
              id='last_name'
              name='last_name'
              {...useInputHandler}
              label='Apellido'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <TextField
          fullWidth
          className={classes.input}
          {...useInputHandler}
          variant='outlined'
          id='player_name'
          name='player_name'
          label='Nickname'
        />
        <TextField
          fullWidth
          className={classes.input}
          variant='outlined'
          id='email'
          name='email'
          {...useInputHandler}
          label='Email'
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <Button variant='contained' color='primary' className={classes.input} fullWidth onClick={submitHandler}>
          Agregar Jugador
        </Button>
      </Grid>
    </>
  );
};

const dispatchStateToProps = {
  rqNewPlayer,
};

export default connect(null, dispatchStateToProps)(PlForm);
