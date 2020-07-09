/* eslint-disable import/extensions */

import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import SignInForm from '../../components/SignIn/SignInForm';

const SignIn = () => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      alignContent='center'
      justify='center'
    >
      <Grid item xs={11}>
        <Typography variant='h3' component='h3'>
          Inicia sesion
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <SignInForm />
      </Grid>
    </Grid>
  );
};

export default SignIn;
