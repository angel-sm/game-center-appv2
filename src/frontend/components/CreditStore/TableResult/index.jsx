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
  Toolbar,
  Typography,
  Checkbox,
} from '@material-ui/core';
import { useStyles } from './styles';

const ResoultTable = (props) => {
  const { playerResoult, isFromPlayer, handlePlayerSelected } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState(isFromPlayer === 'true');

  const playerKeys = ['Nombre', 'Credito', 'Nickname', 'Apellido', 'Email', 'Se unio', 'Seleccionar'];

  const handleChecked = (event) => {
    setChecked(event.target.checked);
    handlePlayerSelected(event.target.checked ? playerResoult : {});
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Toolbar>
          <Typography variant='h6' id='tableTitle' component='div'>
            Resultado de la busqueda
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                {
                  playerKeys.map((key) => {
                    return (<TableCell key={key}>{key}</TableCell>);
                  })
                }
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {
                  Object.keys(playerResoult).map((key) => {
                    return (
                      <TableCell key={key} component='th' scope='row'>{playerResoult[`${key}`]}</TableCell>
                    );
                  })
                }
                <TableCell component='th' scope='row'>
                  <Checkbox
                    checked={checked}
                    onChange={handleChecked}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

    </>
  );
};

const mapSatateToProps = (state) => state;

const mapDispatchToProps = {

};

export default connect(mapSatateToProps, mapDispatchToProps)(ResoultTable);
