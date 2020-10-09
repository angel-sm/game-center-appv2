/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import { Toolbar, Typography } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TournamentResult = ({ tournament }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Toolbar>
        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
          Resultado de la busqueda
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
            {tournament.map((row) => {
              return (
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
                        <Link to={row.season}>{row.seasonName}</Link> : row.seasonName
                    }
                  </TableCell>
                  <TableCell align='right'>
                    <Link to={`/tournaments/${row.id}`}><VisibilityIcon /></Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TournamentResult;

