import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import Titles from '../../components/shared/Titles';
import SearchPlayer from '../../components/shared/SearchPlayer';
import { user } from '../../utils/mokups';
import CardInfo from '../../components/shared/CardInfo';

const Credit = () => {
  return (
    <Grid
      container
      direction='row'
      justify='space-evenly'
    >
      <Grid item>
        <Grid
          container
          direction='column'
        >
          <Grid item>
            <Titles title='Buscar Jugador' />
          </Grid>
          <Grid item xs={12} lg={12}>
            <SearchPlayer />
          </Grid>
          <Grid item xs={12} lg={12}>
            {
              Object.keys(user).map((property) => {
                return (
                  property === 'id' ? null : (
                    <CardInfo key={user[property]} title={property} data={user[property]} />
                  )
                );
              })
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction='column'
        >
          <Grid item>
            <Titles title='Historial del jugador' />
          </Grid>
          <Grid item xs={12} lg={12}>
            <h1>Historial</h1>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Credit;
