import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TournamentTable from '../../components/TournamentTable';
import Competitors from '../../utils/mokups';
import CardInfo from '../../components/CardInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={3} sm={6} xs={12}>
          <CardInfo />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
