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
  FormControl,
  Button,
} from '@material-ui/core';
import { getAllPlayersRequest } from '../../../actions/players';
import { registerCompetitorsRequest } from '../../../actions/competitors';
import { cancelRegisterTournamentRequest } from '../../../actions/tournaments';
import { nextStep } from '../../../actions/pending';
import { useStyles, useToolbarStyles } from './styles';

const PlayerList = (props) => {
  const classes = useStyles();
  const toolbar = useToolbarStyles();

  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    props.getAllPlayersRequest();
  }, []);

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
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.players.players.length - page * rowsPerPage);

  const handleAdd = () => {
    selected.map((player) => {
      props.registerCompetitorsRequest(player.id);
    });
    props.nextStep(2);
  };

  const handleCancel = () => {
    props.cancelRegisterTournamentRequest(props.tournaments.tournamentId);
    document.cookie = 'PENDINGSTEP=0';
    document.cookie = 'PENDINGID=';
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Toolbar className={clsx(toolbar.root, {
          [toolbar.highlight]: selected.length > 0,
        })}
        >
          {selected.length > 0 ? (
            <Typography className={classes.title} color='inherit' variant='subtitle1' component='div'>
              {selected.length}
              {' '}
              jugadores a inscribir
            </Typography>
          ) : (
            <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
              Selecciona los jugadores a inscribir
            </Typography>
          )}
        </Toolbar>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby='tableTitle'
            aria-label='enhanced table'
          >
            <TableBody>
              {props.players.players
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                        {row.name}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={props.players.players.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControl className={classes.chaild}>
        {selected.length > 0 ? (
          <Button type='submit' variant='contained' color='primary' onClick={handleAdd}>
            Registrar jugadores que participaran
          </Button>
        ) : (
          <Button type='submit' variant='contained' color='primary' onClick={handleAdd} disabled>
            Registrar jugadores que participaran
          </Button>
        )}
      </FormControl>
      <FormControl className={classes.chaild}>
        <Button type='submit' variant='contained' color='secondary' onClick={handleCancel}>
          Cancelar
        </Button>
      </FormControl>
    </div>
  );
};

const dispatchStateToProps = {
  getAllPlayersRequest,
  registerCompetitorsRequest,
  nextStep,
  cancelRegisterTournamentRequest,
};

const mapStateToPros = (state) => state;

export default connect(mapStateToPros, dispatchStateToProps)(PlayerList);
