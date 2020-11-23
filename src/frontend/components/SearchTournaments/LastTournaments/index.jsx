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
  IconButton,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import moment from 'moment';
import { useStyles } from './styles';

const tableCells = ['Torneo', 'Costo', 'Fecha inicio', 'Fecha cierre', 'Juego', 'Descripcion', 'Organizador', 'Temporada', 'Detalles'];

const LastTournaments = (props) => {
  const classes = useStyles();

  const { tournaments } = props.tournaments;

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
              {
                tableCells.map((cell) => <TableCell key={cell}>{cell}</TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {tournaments.filter((tournament) => (tournament.isActive !== 0 ? tournament : null)).slice(0, 5).map((row, index) => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>{row.tournament}</TableCell>
                <TableCell>
                  {row.cost}
                </TableCell>
                <TableCell>{moment(row.start).utc(true).format('YYYY-MM-DD')}</TableCell>
                <TableCell>{row.end != null ? moment(row.end).utc(true).format('YYYY-MM-DD') : 'activo'}</TableCell>
                <TableCell>{row.game}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.organizer}</TableCell>
                <TableCell>
                  {
                    row.season != null ?
                      <Link to={row.season}>{row.seasonName}</Link> : 'Sin temporada'
                  }
                </TableCell>
                <TableCell>
                  <Link to={`/tournaments/${row.id}`}>
                    <IconButton aria-label='detalles del torneo' color='primary'>
                      <AssignmentIcon />
                    </IconButton>
                  </Link>
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

