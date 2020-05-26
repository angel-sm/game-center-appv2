import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import { useTableStyles } from './LastTournamentsTable-styles';

import { lastTournaments } from '../../../utils/mokups';

const sortTournaments = (array) => {
  array.slice().sort((a, b) => new Date(a.start) - new Date(b.start));
  console.log(array);
};

const LastTournamentsTable = () => {
  const classesTable = useTableStyles();
  sortTournaments(lastTournaments);
  return (
    <TableContainer component={Paper}>
      <Table className={classesTable.table} aria-label='custom pagination table'>
        <TableHead>
          <TableRow>
            <TableCell>Torneo</TableCell>
            <TableCell align='center'>Juego</TableCell>
            <TableCell align='center'>Fecha</TableCell>
            <TableCell align='right'>Costo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastTournaments.map((tournament) => (
            <TableRow key={tournament.id}>
              <TableCell>
                {tournament.tournament}
              </TableCell>
              <TableCell align='center'>
                {tournament.organizer}
              </TableCell>
              <TableCell align='center'>
                {tournament.start}
              </TableCell>
              <TableCell align='right'>
                {tournament.cost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LastTournamentsTable;
