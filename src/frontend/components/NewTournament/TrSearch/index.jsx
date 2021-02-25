/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react';
import { connect } from 'react-redux';

import { TextField, FormControl, makeStyles, Button, Grid, Typography } from '@material-ui/core';
import { rqGetPlayer } from '../../../redux/actions/players';
import inputValueHandler from '../../../hooks/useInputHandler';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '85%',
  },
}));

const TrSearch = (props) => {
  const classes = useStyles();

  const value = inputValueHandler({
    search: '',
  });

  const handlerClick = () => {
    props.rqGetPlayer(value.form);
  };

  return (
    <>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <Typography gutterBottom variant='h6' component='h4'>
          Seleccionar jugadores
        </Typography>
      </Grid>
      <FormControl className={classes.formControl}>
        <TextField id='search' name='search' label='Buscar por nombre, apellido, nickname o email' variant='outlined' {...value} className={classes.input} size='small' />
        <Button variant='contained' color='primary' onClick={handlerClick}>
          Buscar
        </Button>
      </FormControl>
    </>
  );
};

const dispatchStateToProps = {
  rqGetPlayer,
};

export default connect(null, dispatchStateToProps)(TrSearch);
