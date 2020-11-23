/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import { getCompetitorsRequest, paidCompetitorRequest, setPaid } from '../../../actions/competitors';
import { useStyles, useToolbarStyles, TableControl } from './styles';

const Debtors = (props) => {

  const classes = useStyles();
  const toolbar = useToolbarStyles();

  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setSelected([]);
    props.getCompetitorsRequest(props.tournamentId);
    props.setPaid(false);
  }, [props.tournamentId]);

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.tournaments.tournaments.length - page * rowsPerPage);

  const handleAdd = () => {
    selected.map((player) => {
      props.paidCompetitorRequest(player.cprId);
    });
    window.location.href = '/';
  };

  const debtorsList = props.tournaments.competitors.filter((c) => c.paid === 'debtor');

  return (
    debtorsList.length === 0 ? null : (
      <TableControl>
        <Paper className={classes.paper}>
          <Toolbar className={clsx(toolbar.root, {
            [toolbar.highlight]: selected.length > 0,
          })}
          >
            {selected.length > 0 ? (
              <Typography className={classes.title} color='inherit' variant='subtitle1' component='div'>
                {selected.length}
                {' '}
                jugador seleccionado para realizar su pago
              </Typography>
            ) : (
              <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                Jugadores pendientes de pago
              </Typography>
            )}
            <Tooltip title='Efectuar pago'>
              <IconButton aria-label='Efectuar pago' onClick={handleAdd}>
                <PaymentIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby='tableTitle'
              aria-label='enhanced table'
            >
              <TableBody>
                {
                  debtorsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row)}
                          role='checkbox'
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                        >
                          <TableCell padding='checkbox'>
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </TableCell>
                          <TableCell component='th' id={labelId} scope='row' padding='none'>
                            {row.nickname}
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
          {debtorsList.length === 0 ? null : (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component='div'
              count={props.tournaments.tournaments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          )}
        </Paper>
      </TableControl>
    )
  );
};

const dispatchStateToProps = {
  getCompetitorsRequest,
  paidCompetitorRequest,
  setPaid,
};

const mapStateToPros = (state) => state;

export default connect(mapStateToPros, dispatchStateToProps)(Debtors);
