/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import {
  TextField,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(1),
  },
}));

export const TrData = ({ inputValueHandler, handlerError }) => {
  const classes = useStyles();

  const [creditError, setCreditError] = useState(false);
  const [moneyError, setMoneyError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [startError, setStartError] = useState(false);

  const isNumber = (data, cb) => {
    isNaN(data) ? cb(true) : cb(false);
  };

  const isEmpty = (data, cb, isValid) => {
    data === '' ? cb(true) : cb(false);
  };

  useEffect(() => {
    isNumber(inputValueHandler.form.cost_credit, setCreditError);
    isNumber(inputValueHandler.form.cost_money, setMoneyError);
    isEmpty(inputValueHandler.form.name, setNameError);
    isEmpty(inputValueHandler.form.start, setStartError);
  }, [inputValueHandler.form]);

  return (
    <>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <Typography gutterBottom variant='h5' component='h2'>
          Agregar un nuevo torneo
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>

        <TextField fullWidth className={classes.input} variant='outlined' id='organizer' name='organizer' label='Organizador' disabled value='Admin' />

        <TextField
          fullWidth
          className={classes.input}
          variant='outlined'
          id='name'
          name='name'
          {...inputValueHandler}
          label='Nombre del Torneo'
          helperText={`${nameError ? 'Nombre requerido' : ''}`}
          error={nameError}
        />
      </Grid>

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
              id='cost_credit'
              name='cost_credit'
              {...inputValueHandler}
              label='Credito'
              helperText={`${creditError ? 'Solo se permiten numeros' : ''}`}
              error={creditError}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} variant='standard'>
            <TextField
              fullWidth
              className={classes.input}
              variant='outlined'
              id='cost_money'
              name='cost_money'
              {...inputValueHandler}
              label='Costo'
              helperText={`${moneyError ? 'Solo se permiten numeros' : ''}`}
              error={moneyError}
            />
          </Grid>
        </Grid>

      </Grid>

      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <TextField
          fullWidth
          id='start'
          variant='outlined'
          name='start'
          label='Fecha de inicio del torneo'
          type='date'
          helperText={`${startError ? 'Fecha de inicio incorrecta' : ''}`}
          error={startError}
          defaultValue={new Date()}
          className={classes.input}
          {...inputValueHandler}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

    </>
  );
};
