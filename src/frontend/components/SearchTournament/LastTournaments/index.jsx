import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import { DoneOutline, CloseOutlined } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';

import { AvatarControllContainer, useAvatarStyles, useTableStyles } from './LastTournaments.styles';

import { Competitors } from '../../../utils/mokups';

const LastTournamets = () => {
  const classesTable = useTableStyles();
  const classesAvatar = useAvatarStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classesTable.table} aria-label='custom pagination table'>
        <TableHead>
          <TableRow>
            <TableCell>Torneo</TableCell>
            <TableCell align='center'>Juego</TableCell>
            <TableCell align='center'>Fecha inicio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Competitors.map((row, index) => {
              return index < 5 ? (
                <TableRow key={row.name}>
                  <TableCell align='center'>
                    <AvatarControllContainer>
                      <Avatar className={classesAvatar.root} alt={row.name} src='/static/images/avatar/1.jpg' />
                      {`${row.name} - ${row.nickname}`}
                    </AvatarControllContainer>
                  </TableCell>
                  <TableCell align='center'>
                    {row.points}
                  </TableCell>
                  <TableCell align='center'>
                    {row.paid === 1 ? <DoneOutline /> : <CloseOutlined />}
                  </TableCell>
                </TableRow>
              ) : null;
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LastTournamets;
