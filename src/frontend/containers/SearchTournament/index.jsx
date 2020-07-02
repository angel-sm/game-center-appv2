import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import LastTournamets from '../../components/SearchTournament/LastTournaments';
import Titles from '../../components/shared/Titles';
import Form from '../../components/SearchTournament/Form';
import TableResult from '../../components/SearchTournament/TableResult';

const SearchTournament = () => {
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
            <Titles title='Buscar torneos' />
          </Grid>
          <Grid item xs={12} lg={12}>
            <Form />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TableResult />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction='column'
        >
          <Grid item>
            <Titles title='Ultimos torneos' />
          </Grid>
          <Grid item xs={12} lg={12}>
            <LastTournamets />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchTournament;
