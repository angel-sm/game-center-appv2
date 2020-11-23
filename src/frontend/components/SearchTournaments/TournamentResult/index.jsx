/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
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
import { useStyles } from './styles';

const tableCells = ['Torneos', 'Costo', 'Fecha inicio', 'Fecha cierre', ' Juego', 'Descripcion', ' Organizador', 'Temporada', 'Detalles'];

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
              {
                tableCells.map((cell) => <TableCell key={cell}>{cell}</TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {tournament.map((row) => {
              return (
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
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TournamentResult;

