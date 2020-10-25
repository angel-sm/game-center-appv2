/* eslint-disable no-new */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { registerSaleRequest, registerPlayerSalesRequest } from '../../../../../actions/sales';
import { searchPlayerRequest } from '../../../../../actions/players';

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#00c853',
    '&:hover': {
      backgroundColor: '#00e676',
    },
  },
}))(Button);

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  registerSaleRequest,
  registerPlayerSalesRequest,
  searchPlayerRequest,
};

export const ChangeButton = connect(mapStateToProps, dispatchStateToProps)(
  (props) => {
    const { player, totalSale, remainingCredit, moneyAmount, products, handleCleanTable } = props;

    const handlerSale = () => {
      props.registerSaleRequest({
        amountCredit: remainingCredit,
        amountMoney: moneyAmount,
        total: totalSale,
      }, player.id, products);
      handleCleanTable();
    };

    return (
      <>
        {
          products.length > 0 ? (
            <ColorButton variant='contained' color='primary' onClick={handlerSale}>
              Realizar venta
            </ColorButton>
          ) : (
            <ColorButton variant='contained' disabled color='primary'>
              Realizar venta
            </ColorButton>
          )
        }
      </>
    );
  },
);
