import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Center from '../../components/Centers/Center';

const Centers = () => {
  return (
    <Grid
      container
      alignItems='center'
      direction='column'
    >
      <Grid item>
        <Typography variant='h4' component='h4'>
          Selecciona un centro
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction='row'
        >
          <Center />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Centers;
