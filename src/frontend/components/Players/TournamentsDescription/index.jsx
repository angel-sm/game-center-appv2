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
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { getPrizesByRequest } from '../../../actions/prizes';

const TournamentDescription = (props) => {
  const { playerResoult } = props;
  const classes = useStyles();

  useEffect(() => {
    props.getPrizesByRequest('player', playerResoult.id);
  }, [playerResoult]);

  console.log(props);
  const playerKeys = ['Torneo', 'Credito total del torneo torneo', 'Puntos del jugador', 'Lugar', 'Porsentaje premio', 'Credito ganado'];

  return (
    props.players.playerPrizes.length > 0 ? (
      <Paper>
        <Toolbar>
          <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
            {`Ultimos torneos de ${playerResoult.nickname}`}
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
                props.players.playerPrizes.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component='th' scope='row'>
                        <Link to={`/tournaments/${row.id}`}>{row.tournament}</Link>
                      </TableCell>
                      <TableCell component='th' scope='row'>{row.totalCredit}</TableCell>
                      <TableCell component='th' scope='row'>{row.points}</TableCell>
                      <TableCell component='th' scope='row'>{row.totalCredit}</TableCell>
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
    ) : (
      <Paper>
        <Toolbar>
          <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
            Sin torneos
          </Typography>
        </Toolbar>
      </Paper>
    )
  );
};

const mapSatateToProps = (state) => state;

const mapDispatchToProps = {
  getPrizesByRequest,
};

export default connect(mapSatateToProps, mapDispatchToProps)(TournamentDescription);

