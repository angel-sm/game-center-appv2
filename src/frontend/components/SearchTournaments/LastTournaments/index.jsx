/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import moment from 'moment';
import { useStyles } from './styles';

const LastTournaments = (props) => {
  const classes = useStyles();

  return (
    <Paper>
      <Toolbar>
        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
          Ultimos torneos cerrados
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
              <TableCell align='right'>Ver Temporada</TableCell>
              <TableCell align='right'>Ver Torneo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tournaments.tournaments.filter((tournament) => (tournament.isActive !== 0 ? tournament : null)).slice(0, 5).map((row) => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>{row.tournament}</TableCell>
                <TableCell align='right'>
                  {row.cost}
                </TableCell>
                <TableCell align='right'>{moment(row.start).utc(true).format('YYYY-MM-DD')}</TableCell>
                <TableCell align='right'>{row.end != null ? moment(row.end).utc(true).format('YYYY-MM-DD') : 'activo'}</TableCell>
                <TableCell align='right'>{row.game}</TableCell>
                <TableCell align='right'>{row.description}</TableCell>
                <TableCell align='right'>{row.organizer}</TableCell>
                <TableCell align='right'>
                  {
                    row.season != null ?
                      <Link to={row.season}>{row.seasonName}</Link> : 'Sin temporada'
                  }
                </TableCell>
                <TableCell align='right'>
                  <Link to={`/tournaments/${row.id}`}><VisibilityIcon /></Link>
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

