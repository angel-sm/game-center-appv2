/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { DataGrid } from '@material-ui/data-grid';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { Content } from '../../shared/Content';

const columns = [
  { field: 'avatar',
    headerName: '-',
    width: 70,
    disableColumnMenu: true,
    renderCell: (params) => (
      <Avatar alt='Travis Howard' src={`${params.value}`} />
    ),
  },
  { field: 'name', headerName: 'Nombre', width: 130 },
  { field: 'last_name', headerName: 'Apellido', width: 130 },
  { field: 'player_name', headerName: 'Jugador', width: 130 },
  { field: 'email', headerName: 'Email', width: 190 },
  { field: 'credit', headerName: 'Credito', type: 'number', width: 100 },
];

const TrCompetitors = (props) => {

  const { handleEnrollPlayers } = props;
  const [rows, setRows] = React.useState([]);
  const [select, setSelect] = React.useState([]);

  useEffect(() => {
    setRows(props.players || []);
  }, [props.players]);

  const validateSearch = (id, data) => {
    const index = rows.findIndex((player) => player.id === id);
    rows.splice(index, 1);
    setRows([...rows]);
    setSelect([...select, data]);
  };

  const handlerAdd = (data) => {
    const index = select.findIndex((player) => player.id === data.id);

    if (index !== -1) {
      select.splice(index, 1);
      setSelect([...select]);
    } else {
      handleEnrollPlayers({
        player_id: data.id,
      });
    }
    validateSearch(data.id, data);
  };

  const validateEnrrolled = (id) => {
    const index = select.findIndex((player) => player.id === id);
    select.splice(index, 1);
    setSelect([...select]);
  };

  const handleDelete = (data) => {
    handleEnrollPlayers({
      player_id: data.id,
    });
    validateEnrrolled(data.id);
  };

  return (
    <>
      <div style={{ height: 250, width: 800, margin: 'auto', boxShadow: '2px 2px 2px rgba(0,0,0,.1)' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          onRowSelected={({ data }) => handlerAdd(data)}
        />
      </div>

      <Content>
        <Grid item xs={12} sm={12} lg={8} variant='standard'>
          <Typography gutterBottom variant='h6' component='h4'>
            Jugadores agregados al torneo
          </Typography>
        </Grid>
      </Content>

      <div style={{ height: 500, width: 800, margin: 'auto', boxShadow: '2px 2px 2px rgba(0,0,0,.1)' }}>
        <DataGrid
          rows={select}
          columns={columns}
          pageSize={5}
          onRowSelected={({ data }) => handleDelete(data)}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players.players,
  };
};

export default connect(mapStateToProps, null)(TrCompetitors);
