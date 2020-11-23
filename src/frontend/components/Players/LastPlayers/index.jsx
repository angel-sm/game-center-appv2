/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import moment from 'moment';
import { useStyles } from './styles';
import { Title } from '../../shared/Title';

const tableCells = ['Id', 'Nombre', 'Credito', 'Nickname', 'Apellido', 'Email', 'Se unio'];

const resetDate = (date) => {
  return moment(date).locale('e').format('YYYY-MM-DD');
};

const LastPlayers = (props) => {
  const classes = useStyles();

  const { players } = props.players;

  return (
    <Paper className={classes.space}>
      <Title title='Ultimos jugadores agregados' />
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
            {players.slice(0, 5).map((row, index) => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.credit}</TableCell>
                <TableCell>{row.nickname}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{resetDate(row.created_on)}</TableCell>
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

export default connect(mapSatateToProps, mapDispatchToProps)(LastPlayers);

