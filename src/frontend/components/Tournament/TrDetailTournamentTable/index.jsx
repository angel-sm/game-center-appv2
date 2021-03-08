/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import { Typography, Grid } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id',
    headerName: 'ID',
    width: 70,
    sortable: false,
    disableColumnMenu: true },
  { field: 'player_name',
    headerName: 'Jugador',
    width: 140,
    sortable: false,
    disableColumnMenu: true },
  { field: 'paid',
    headerName: 'Pago Realizado',
    width: 150,
    sortable: false,
    disableColumnMenu: true },
  { field: 'points',
    headerName: 'Puntos',
    width: 150,
    sortable: false,
    disableColumnMenu: true },
  { field: 'place',
    headerName: 'Posicion',
    width: 160,
    sortable: false,
    disableColumnMenu: true },
  { field: 'credit_won',
    headerName: 'Credito ganado',
    width: 160,
    sortable: false,
    disableColumnMenu: true },
];

const TrDetailTournamentTable = ({ deatils }) => {

  return (
    <>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <Typography gutterBottom variant='h6' component='h4'>
          Detalles Del Torneo
        </Typography>
      </Grid>
      <div style={{ height: 380, width: 900, margin: 'auto', boxShadow: '2px 2px 2px rgba(0,0,0,.1)' }}>
        <DataGrid
          rows={deatils}
          columns={columns}
          pageSize={5}
        />
      </div>
    </>
  );
};

export default TrDetailTournamentTable;

