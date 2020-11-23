import React from 'react';
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

import { ChangeButton } from './components/ChangeButton';
import { Title } from '../../shared/Title';

const tableCells = ['Clave', 'Producto', 'Costo', 'Cantidad'];

const total = (items) => items.map(({ price, amount }) => price * amount).reduce((sum, i) => sum + i, 0);

export default function TableProducts(props) {
  const classes = useStyles();
  const { listOfProducts, player, handleCleanList, handleRefreshPlayerSearch } = props;
  const getTotal = total(listOfProducts);
  let creditOfPlayer;
  let remainingMoney;

  if (player.id !== undefined) {
    creditOfPlayer = getTotal > player.credit ? 0 : player.credit - getTotal;
    remainingMoney = getTotal > player.credit ? ((player.credit - getTotal) * -1) : 0;
  } else {
    creditOfPlayer = 0;
    remainingMoney = getTotal;
  }

  const handleCleanTable = () => {
    handleCleanList();
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer component={Paper}>
        <Title title='Lista de productos a cangear' />
        <Table className={classes.table} aria-label='spanning table'>
          <TableHead>
            <TableRow>
              {tableCells.map((cell) => (<TableCell key={cell}>{cell}</TableCell>))}
              <TableCell><strong>SubTotal</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listOfProducts.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{`$ ${row.price}`}</TableCell>
                <TableCell>{`${row.amount}`}</TableCell>
                <TableCell>{`$ ${row.subTotal}`}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={1} />
              <TableCell colSpan={3}><strong>Total de la compra</strong></TableCell>
              <TableCell>{`$ ${getTotal}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={1} />
              <TableCell colSpan={3}><strong>Credito del jugador</strong></TableCell>
              <TableCell>{`$ ${player.credit || 0}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={1} />
              <TableCell colSpan={3}><strong>Creditos restantes del jugador</strong></TableCell>
              <TableCell>{`$ ${creditOfPlayer || 0}`}</TableCell>
            </TableRow>
            {
              getTotal > player.credit || player.id === undefined ? (
                <TableRow>
                  <TableCell rowSpan={1} />
                  <TableCell colSpan={3}><strong>Total restante a pagar en efectivo</strong></TableCell>
                  <TableCell>{`$ ${remainingMoney}`}</TableCell>
                </TableRow>
              ) : null
            }
          </TableBody>
        </Table>
      </TableContainer>
      <ChangeButton
        player={player}
        totalSale={getTotal}
        creditOfPlayer={creditOfPlayer || 0}
        remainingMoney={remainingMoney}
        products={listOfProducts}
        handleCleanTable={handleCleanTable}
        handleRefreshPlayerSearch={handleRefreshPlayerSearch}
      />
    </Paper>
  );
}
