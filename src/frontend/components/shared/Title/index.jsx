/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Toolbar,
  Typography,
} from '@material-ui/core';

export const Title = ({ title }) => (
  <Toolbar>
    <Typography variant='h6' id='tableTitle' component='div'>
      {title}
    </Typography>
  </Toolbar>
);
