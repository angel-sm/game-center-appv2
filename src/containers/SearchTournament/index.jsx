import React from 'react';
import { Grid } from '@material-ui/core';

import LastTournamentsTable from '../../components/SearchTournament/LastTournamentsTable';
import SearchBar from '../../components/SearchTournament/SearchBar';
import SearchTournamentTable from '../../components/SearchTournament/SearchTournamentTable';
import DescriptionCard from '../../components/SearchTournament/DescriptionCard';

const SearchTournament = () => {
  return (
    <Grid container justify='center'>
      <Grid item lg={8} xs={12}>
        <LastTournamentsTable />
      </Grid>
      <Grid item lg={8} xs={12}>
        <SearchBar />
      </Grid>
      <Grid item lg={8} xs={12}>
        <Grid>
          <Grid item>
            <SearchTournamentTable />
          </Grid>
          <Grid item>
            <DescriptionCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchTournament;
