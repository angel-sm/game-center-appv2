import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import { DoneOutline, CloseOutlined } from '@material-ui/icons';

import { usePaginationStyles, useTableStyles } from './LastTournamentsTable-styles';

import('./LastTournamentsTable.scss');

const LastTournamentsTable = ({ lastTournaments }) => {
  const classesTable = useTableStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classesTable.table} aria-label='custom pagination table'>
        <TableHead>
          <TableRow>
            <TableCell>Torneo</TableCell>
            <TableCell align='center'>Juego</TableCell>
            <TableCell align='center'>Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ?
            lastTournaments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) :
            lastTournaments
          ).filter((a, b) => a.cost > b.cost).map((competitor) => (
            <TableRow key={competitor.name}>
              <TableCell align='center'>
                c
              </TableCell>
              <TableCell align='center'>
                {competitor.points}
              </TableCell>
              <TableCell align='center'>
                {competitor.paid === 1 ? <DoneOutline /> : <CloseOutlined />}
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LastTournamentsTable;
