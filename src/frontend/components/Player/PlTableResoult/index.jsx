/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';

import { DataGrid } from '@material-ui/data-grid';
import { Avatar } from '@material-ui/core';
import { TrafficRounded } from '@material-ui/icons';

const columns = [
  { field: 'id',
    headerName: 'ID',
    width: 70,
    sortable: false,
    disableColumnMenu: TrafficRounded },
  {
    field: 'avatar',
    headerName: '-',
    width: 70,
    disableColumnMenu: true,
    renderCell: (params) => (
      <Avatar alt='Travis Howard' src={`${params.value}`} />
    ),
  },
  { field: 'player_name', headerName: 'Jugador', width: 180 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'credit',
    headerName: 'Credito',
    width: 120,
    sortable: false,
    disableColumnMenu: true },
];

const PlTableResoult = ({ players, hanlderPlayer }) => {

  return (
    <>
      <div style={{ height: 300, width: 900, margin: 'auto', boxShadow: '2px 2px 2px rgba(0,0,0,.1)' }}>
        <DataGrid
          rows={players}
          columns={columns}
          pageSize={5}
          onRowSelected={({ data }) => hanlderPlayer(data)}
        />
      </div>
    </>
  );
};

export default PlTableResoult;
