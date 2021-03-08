/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import { Typography, Grid, IconButton } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import AssignmentIcon from '@material-ui/icons/Assignment';

const TrTableResult = ({ result, getTournamentSelected }) => {

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
    { field: '',
      headerName: 'Detalles',
      width: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <IconButton aria-label='delete' size='small' onClick={() => getTournamentSelected(params)}>
          <AssignmentIcon fontSize='inherit' color='primary' />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <Typography gutterBottom variant='h6' component='h4'>
          Torneos Encontrados
        </Typography>
      </Grid>
      <div style={{ height: 300, width: 900, margin: 'auto', boxShadow: '2px 2px 2px rgba(0,0,0,.1)' }}>
        <DataGrid
          rows={result}
          columns={columns}
          pageSize={5}
        />
      </div>
    </>
  );
};

export default TrTableResult;

