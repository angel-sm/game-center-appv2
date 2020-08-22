/* eslint-disable no-restricted-globals */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { IconButton, Button } from '@material-ui/core';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposurePlus2Icon from '@material-ui/icons/ExposurePlus2';
import { getCompetitorsRequest, setPointsCompetitorRequest, nextRoundRequest } from '../../../actions/competitors';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  highlight:
    theme.palette.type === 'light' ?
      {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      } :
      {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

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

  const headCells = ['Nombre', 'Nickname', 'Puntos', 'Posición'];

  const paidsList = props.tournaments.competitors.filter((c) => c.paid === 'paid');

  const handleOnePoints = () => {
    const agree = confirm(`${selected.nickname} gano 1 punto esta ronda?`);
    agree ? props.setPointsCompetitorRequest(selected.cprId, selected.points + 1) : null;
    window.location.href = `/tournaments/${props.tournamentId}`;
  };

  const handleTwoPoints = () => {
    const agree = confirm(`${selected.nickname} gano 2 punto esta ronda?`);
    agree ? props.setPointsCompetitorRequest(selected.cprId, selected.points + 2) : null;
    window.location.href = `/tournaments/${props.tournamentId}`;
  };

  const hanldeNextRound = () => {
    props.tournaments.competitors.map((player) => {
      props.nextRoundRequest(player.cprId);
    });
    window.location.href = `/tournaments/${props.tournamentId}`;
  };

  return (
    <div className={classes.root}>
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
                Tabla de posiciones, selecciona un jugador para agregar puntos
              </Typography>
              {
                Object.keys(selected).length > 0 && selected.setPoints === 0 ? (
                  <div>
                    <IconButton aria-label='Agregar un punto' onClick={handleOnePoints}>
                      <ExposurePlus1Icon />
                      <h6> punto</h6>
                    </IconButton>
                    <IconButton aria-label='Agregar dos punto' onClick={handleTwoPoints}>
                      <ExposurePlus2Icon />
                      <h6> puntos</h6>
                    </IconButton>
                  </div>
                ) : (
                  Object.keys(selected).length > 0 ? (
                    <Typography className={classes.title} variant='body2'>
                      {`puntos de ${selected.nickname} ya asignados`}
                    </Typography>
                  ) : null
                )
              }
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
                paidsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                          {index + 1}
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
      <Button variant='contained' color='primary' onClick={hanldeNextRound}>
        Terminar esta ronda y pasar a la siguiente
      </Button>
    </div>
  );
};

const dispatchStateToProps = {
  getCompetitorsRequest,
  setPointsCompetitorRequest,
  nextRoundRequest,
};

const mapStateToPros = (state) => state;

export default connect(mapStateToPros, dispatchStateToProps)(Paids);
