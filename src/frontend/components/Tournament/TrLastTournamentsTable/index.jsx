/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import moment from 'moment';

import { Typography, Grid } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id',
    headerName: 'ID',
    width: 70,
    sortable: false,
    disableColumnMenu: true },
  { field: 'name',
    headerName: 'Torneo',
    width: 140,
    sortable: false,
    disableColumnMenu: true },
  { field: 'game_name',
    headerName: 'Juego',
    width: 150,
    sortable: false,
    disableColumnMenu: true },
  { field: 'season_name',
    headerName: 'Temporada',
    width: 150,
    sortable: false,
    disableColumnMenu: true },
  { field: 'players_enrolled',
    headerName: 'Tot. jugadores',
    width: 160,
    sortable: false,
    disableColumnMenu: true },
  { field: 'created',
    headerName: 'Creado',
    width: 160,
    sortable: false,
    disableColumnMenu: true },
];

const TrLastTournamentsTable = ({ lastTournaments }) => {

  return (
    <>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <Typography gutterBottom variant='h6' component='h4'>
          Ultimos Torneos Agregados
        </Typography>
      </Grid>
      <div style={{ height: 380, width: 900, margin: 'auto', boxShadow: '2px 2px 2px rgba(0,0,0,.1)' }}>
        <DataGrid
          rows={lastTournaments.map((data) => {
            const tournament = { ...data };
            tournament['created'] = moment(data.created).format('DD / MM / YYYY');
            return tournament;
          })}
          columns={columns}
          pageSize={5}
        />
      </div>
    </>
  );
};

export default TrLastTournamentsTable;

