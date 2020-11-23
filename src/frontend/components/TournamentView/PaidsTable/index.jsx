/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
  Paper,
} from '@material-ui/core';
import { getCompetitorsRequest } from '../../../actions/competitors';
import AddPoints from './components/AddPoints';
import { useToolbarStyles, useStyles, TableControl } from './styles';

const Paids = (props) => {
  const classes = useStyles();
  const toolbar = useToolbarStyles();

  const [selected, setSelected] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setSelected([]);
    props.getCompetitorsRequest(props.tournamentId);
  }, [props.tournamentId]);

  const handleClick = (event, name) => {
    setSelected(name);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.tournaments.tournaments.length - page * rowsPerPage);

  const headCells = ['Nombre', 'Nickname', 'Puntos', 'Posición', ''];

  const paidsList = props.tournaments.competitors.filter((c) => c.paid === 'paid');
  const debtorsList = props.tournaments.competitors.filter((c) => c.paid === 'debtor');

  return (
    <TableControl>
      <Paper className={classes.paper}>
        {
          paidsList.length === 0 ? (
            <Toolbar>
              <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                Ningun jugador ha realizado su pago
              </Typography>
            </Toolbar>
          ) : (
            <Toolbar className={clsx(toolbar.root, {
              [toolbar.highlight]: selected.length > 0,
            })}
            >
              <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                Tabla de posiciones
              </Typography>
            </Toolbar>
          )
        }
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby='tableTitle'
            aria-label='enhanced table'
          >
            <TableHead>
              <TableRow>
                {headCells.map((hc) => (
                  <TableCell key={hc}>
                    {hc}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                paidsList
                  .sort()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row)}
                        role='checkbox'
                        tabIndex={-1}
                        key={row.name}
                        selected={selected.name === row.name}
                      >
                        <TableCell component='th' id={labelId} scope='row' padding='default'>
                          {row.name}
                        </TableCell>
                        <TableCell component='th' id={labelId} scope='row' padding='default'>
                          {row.nickname}
                        </TableCell>
                        <TableCell component='th' id={labelId} scope='row' padding='default'>
                          {row.points}
                        </TableCell>
                        <TableCell component='th' id={labelId} scope='row' padding='default'>
                          {row.place}
                        </TableCell>
                        <TableCell component='th' id={labelId} scope='row' padding='none'>
                          {
                            debtorsList.length === 0 ? props.tournaments.tournament.end === null ? selected.name === row.name ? (
                              <AddPoints
                                playerId={selected.cprId}
                                player={selected.nickname}
                                isSelected={false}
                              />
                            ) :
                              <AddPoints isSelected={true} /> : null : null
                          }
                        </TableCell>
                      </TableRow>
                    );
                  })
              }
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {
          paidsList.length === 0 ? null : (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component='div'
              count={props.tournaments.tournaments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          )
        }
      </Paper>
    </TableControl>
  );
};

const dispatchStateToProps = {
  getCompetitorsRequest,
};

const mapStateToPros = (state) => state;

export default connect(mapStateToPros, dispatchStateToProps)(Paids);
