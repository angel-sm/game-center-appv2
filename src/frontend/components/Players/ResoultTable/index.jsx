/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { useStyles } from './styles';
import EditButton from './Components/EditButton';
import DeleteButton from './Components/DeleteButton';
import CreditButton from './Components/CreditButton';
import TransferButton from './Components/TranferButton';
import { Title } from '../../shared/Title';

const resetDate = (date) => {
  return moment(date).locale('e').format('YYYY-MM-DD');
};

const ResoultTable = (props) => {
  const { playerResoult } = props;
  const classes = useStyles();

  const playerKeys = ['Nombre', 'Credito', 'Nickname', 'Apellido', 'Email', 'Se unio', 'Tienda', 'Transferir', 'Editar', 'Eliminar'];

  return (
    <Paper className={classes.space}>
      <Title title='Resultado de la busqueda' />
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
                    key === 'created_on' ?
                      <TableCell key={key} component='th' scope='row'>{resetDate(playerResoult[`${key}`])}</TableCell> :
                      <TableCell key={key} component='th' scope='row'>{playerResoult[`${key}`]}</TableCell>
                  );
                })
              }
              <TableCell component='th' scope='row'>
                <CreditButton player={playerResoult.nickname} maxofcredit={playerResoult.credit} />
              </TableCell>
              <TableCell component='th' scope='row'><TransferButton player={playerResoult} /></TableCell>
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

