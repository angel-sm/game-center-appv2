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
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { Link } from 'react-router-dom';
import { Toolbar, Typography } from '@material-ui/core';

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
              <TableCell align='right'>Ver mas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tournament.map((t) => {
              return (
                <TableRow key={t.id}>
                  <TableCell component='th' scope='row'>{t.tournament}</TableCell>
                  <TableCell align='right'>
                    {t.cost}
                  </TableCell>
                  <TableCell align='right'>{moment(t.start).utc(true).format('YYYY-MM-DD')}</TableCell>
                  <TableCell align='right'>{t.end != null ? moment(t.start).utc(true).format('YYYY-MM-DD') : 'activo'}</TableCell>
                  <TableCell align='right'>{t.game}</TableCell>
                  <TableCell align='right'>{t.description}</TableCell>
                  <TableCell align='right'>{t.organizer}</TableCell>
                  <TableCell align='right'>
                    <Link to={`/tournaments/${t.id}`}><EmojiEventsIcon /></Link>
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

