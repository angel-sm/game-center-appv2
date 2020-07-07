import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import Stepper from '../../components/Players/Stepper';
import Titles from '../../components/shared/Titles';

const Players = () => {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Grid item>
        <Titles title='Buscar torneos' />
      </Grid>
      <Grid item lg={8} xs={12}>
        <Stepper />
      </Grid>
    </Grid>
  );
};

export default Players;
