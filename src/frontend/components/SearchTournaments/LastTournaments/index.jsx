/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import IconButton from '@material-ui/core/IconButton';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { Link } from 'react-router-dom';
import { Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const LastTournaments = (props) => {
  const classes = useStyles();

  return (
    <Paper>
      <Toolbar>
        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
          Ultimos torneos
        </Typography>
      </Toolbar>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Torneo</TableCell>
              <TableCell align='right'>Costo</TableCell>
              <TableCell align='right'>Fecha inicio</TableCell>
              <TableCell align='right'>Fecha cierre</TableCell>
              <TableCell align='right'>Juego</TableCell>
              <TableCell align='right'>Descripcion</TableCell>
              <TableCell align='right'>Organizador</TableCell>
              <TableCell align='right'>Ver mas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tournaments.tournaments.slice(0, 5).map((row) => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>{row.tournament}</TableCell>
                <TableCell align='right'>
                  {row.cost}
                </TableCell>
                <TableCell align='right'>{row.start}</TableCell>
                <TableCell align='right'>{row.end != null ? row.end : 'activo'}</TableCell>
                <TableCell align='right'>{row.game}</TableCell>
                <TableCell align='right'>{row.description}</TableCell>
                <TableCell align='right'>{row.organizer}</TableCell>
                <TableCell align='right'>
                  <Link to={`/tournaments/${row.id}`}><EmojiEventsIcon /></Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

  );
};

const mapSatateToProps = (state) => state;

const mapDispatchToProps = {

};

export default connect(mapSatateToProps, mapDispatchToProps)(LastTournaments);

