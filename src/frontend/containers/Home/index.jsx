/* eslint-disable consistent-return */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TournamentTable from '../../components/TournamentTable';
import CardInfo from '../../components/CardInfo';

import { CompetitorsContainer, ButtonsContainer } from './Home.style';

import { Competitors } from '../../utils/mokups';

const Home = () => {
  let isPaid = true;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={3} sm={6} xs={12}>
          <CardInfo title='Torneo' />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <CardInfo title='Costo' />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <CardInfo title='Organizador' />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <CardInfo title='Credito total' />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <CardInfo title='Juego' />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <CardInfo title='Inicia' />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <CardInfo title='Finaliza' />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CompetitorsContainer>
            <Typography variant='h5' component='h5'>
              Competitors
            </Typography>
            <ButtonsContainer>
              {
                // eslint-disable-next-line array-callback-return
                Competitors.map((competitor) => {
                  if (!competitor.paid > 0) {
                    isPaid = false;
                    return isPaid;
                  }
                })
              }
              {
                isPaid ? (
                  <Button color='secondary' href='#outlined-buttons'>
                    Cerra torneo
                  </Button>
                ) :
                  (
                    <Button color='secondary' disabled href='#outlined-buttons'>
                      Cerra torneo
                    </Button>
                  )
              }
              <Button color='primary' href='#outlined-buttons'>
                Credito
              </Button>
              <Button color='primary' href='#outlined-buttons'>
                Editar
              </Button>
            </ButtonsContainer>
          </CompetitorsContainer>
        </Grid>
        <Grid item sm={12}>
          <TournamentTable Competitors={Competitors} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
