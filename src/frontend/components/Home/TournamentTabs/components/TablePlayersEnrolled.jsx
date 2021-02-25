/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import { DataGrid } from '@material-ui/data-grid';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { Content } from '../../../shared/Content';

const columns = [
  { field: 'avatar',
    headerName: '-',
    width: 70,
    disableColumnMenu: true,
    renderCell: (params) => (
      <Avatar alt='Travis Howard' src={`${params.value}`} />
    ),
  },
  { field: 'player_name', headerName: 'Jugador', width: 130 },
  { field: 'points', headerName: 'Puntos', width: 100 },
  { field: 'paid', headerName: 'Pagado', width: 120 },
  { field: 'credit', headerName: 'Credito', type: 'number', width: 100 },
  { field: '', headerName: 'Ganado', type: 'number', width: 120 },

];

const TablePlayersEnrolled = ({ players }) => {

  return (
    <>
      <div style={{ height: 400, width: 700, margin: 'auto', boxShadow: '2px 2px 2px rgba(0,0,0,.1)' }}>
        <DataGrid
          rows={players}
          columns={columns}
          pageSize={5}
          onRowSelected={({ data }) => {}}
        />
      </div>
    </>
  );
};

export default TablePlayersEnrolled;
