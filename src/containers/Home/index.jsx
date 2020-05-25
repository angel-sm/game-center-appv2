/* eslint-disable consistent-return */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import CardInfo from '../../components/Home/CardInfo';
import CompetitorsTable from '../../components/Home/CompetitorsTable';

import useButtonStyles from './Home-styles';

import { competitors } from '../../utils/mokups';

import('./Home.scss');

const Home = () => {
  let isPaid = true;
  return (
    <>
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <div className='Competitors-content'>
            <Typography variant='h3' component='h3'>
              {`${'Nombre del torneo'}`}
            </Typography>
            <div className='Buttons-content'>
              {
                // eslint-disable-next-line array-callback-return
                competitors.map((competitor) => {
                  if (!competitor.paid > 0) {
                    isPaid = false;
                    return isPaid;
                  }
                })
              }
              {
                isPaid ? (
                  <Button
                    color='secondary'
                    href='#outlined-buttons'
                    variant='outlined'
                    className={useButtonStyles().root}
                    startIcon={<DeleteIcon />}
                  >
                    Cerra torneo
                  </Button>
                ) :
                  (
                    <Button
                      disabled
                      color='secondary'
                      href='#outlined-buttons'
                      variant='outlined'
                      className={useButtonStyles().root}
                      startIcon={<DeleteIcon />}
                    >
                      Cerra torneo
                    </Button>
                  )
              }
              <Button
                color='primary'
                href='#outlined-buttons'
                variant='outlined'
                size='small'
                className={useButtonStyles().root}
              >
                Credito
              </Button>
              <Button
                color='primary'
                href='#outlined-buttons'
                variant='outlined'
                size='small'
                className={useButtonStyles().root}
              >
                Editar
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
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
        <Grid item sm={12}>
          <CompetitorsTable competitors={competitors} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
