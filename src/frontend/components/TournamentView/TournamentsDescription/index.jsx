/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
import { useStyles } from './styles';
import { getPrizesByRequest } from '../../../actions/prizes';
import { getTournamentInfoPrizes } from '../../../actions/tournaments';

const TournamentDescription = (props) => {
  const { tournamentId } = props;
  const classes = useStyles();

  useEffect(() => {
    props.getTournamentInfoPrizes([]);
    props.getPrizesByRequest('id', tournamentId);
  }, [tournamentId]);

  const playerKeys = ['Nombre', 'Nickname', 'Lugar', 'Puntos del jugador', 'Porsentaje ganado', 'Credito ganado'];

  return (
    <Paper>
      <Toolbar>
        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
          Tabla estadisticas finales
        </Typography>
      </Toolbar>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {
                playerKeys.map((key) => {
                  return (<TableCell key={key}>{key}</TableCell>);
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              props.tournaments.prizesInfo.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>{row.name}</TableCell>
                    <TableCell component='th' scope='row'>{row.nickname}</TableCell>
                    <TableCell component='th' scope='row'>{row.place}</TableCell>
                    <TableCell component='th' scope='row'>{row.points}</TableCell>
                    <TableCell component='th' scope='row'>{`${row.percent}%`}</TableCell>
                    <TableCell component='th' scope='row'>{row.total}</TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const mapSatateToProps = (state) => state;

const mapDispatchToProps = {
  getPrizesByRequest,
  getTournamentInfoPrizes,
};

export default connect(mapSatateToProps, mapDispatchToProps)(TournamentDescription);

