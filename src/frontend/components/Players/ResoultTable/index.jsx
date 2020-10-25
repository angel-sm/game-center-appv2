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
} from '@material-ui/core';
import { useStyles } from './styles';
import EditButton from './Components/EditButton';
import DeleteButton from './Components/DeleteButton';
import CreditButton from './Components/CreditButton';

const ResoultTable = (props) => {
  const { playerResoult } = props;
  const classes = useStyles();

  const playerKeys = ['Nombre', 'Credito', 'Nickname', 'Apellido', 'Email', 'Se unio', 'Tienda', 'Editar', 'Eliminar'];

  return (
    <Paper>
      <Toolbar>
        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
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
                {playerResoult.credit > 0 ? <CreditButton disabled={false} player={playerResoult.nickname} maxofcredit={playerResoult.credit} /> : <CreditButton disabled={true} player={playerResoult.nickname} />}
              </TableCell>
              <TableCell component='th' scope='row'><EditButton player={playerResoult} /></TableCell>
              <TableCell component='th' scope='row'><DeleteButton playerId={playerResoult.id} /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

  );
};

const mapSatateToProps = (state) => state;

const mapDispatchToProps = {

};

export default connect(mapSatateToProps, mapDispatchToProps)(ResoultTable);

