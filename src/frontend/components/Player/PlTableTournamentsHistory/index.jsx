/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';

import { IconButton, Typography, Grid } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const PlTableTournamentsHistory = ({ tournaments, hanlderTournament }) => {

  const getTournamentSelected = ({ row }) => {
    hanlderTournament(row.id);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Torneo', width: 140 },
    { field: 'game_name', headerName: 'Juego', width: 150 },
    { field: 'season_name', headerName: 'Temporada', width: 150 },
    { field: 'total_credit', headerName: 'Credito Total', width: 140, sortable: false },
    { field: 'total_money', headerName: 'Dinero Total', width: 140, disableColumnMenu: true },
    { field: '',
      headerName: 'Mas',
      width: 70,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <IconButton aria-label='delete' size='small' onClick={() => getTournamentSelected(params)}>
          <AssignmentIndIcon fontSize='inherit' color='primary' />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <Typography gutterBottom variant='h6' component='h4'>
          Torneos del jugador
        </Typography>
      </Grid>
      <div style={{ height: 300, width: 900, margin: 'auto', boxShadow: '2px 2px 2px rgba(0,0,0,.1)' }}>
        <DataGrid
          rows={tournaments}
          columns={columns}
          pageSize={5}
        />
      </div>
    </>
  );
};

export default PlTableTournamentsHistory;
