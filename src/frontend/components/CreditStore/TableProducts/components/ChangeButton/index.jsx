/* eslint-disable no-new */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { connect } from 'react-redux';
import { registerSaleRequest, registerPlayerSalesRequest } from '../../../../../actions/sales';
import { searchPlayerRequest } from '../../../../../actions/players';
import { ColorButton } from './style';

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  registerSaleRequest,
  registerPlayerSalesRequest,
  searchPlayerRequest,
};

export const ChangeButton = connect(mapStateToProps, dispatchStateToProps)(
  (props) => {
    const { player, totalSale, newCreditPlayer, creditSale, remainingMoney, products, handleCleanTable } = props;

    const handlerSale = () => {
      props.registerSaleRequest(
        {
          amountCredit: creditSale,
          amountMoney: remainingMoney,
          total: totalSale,
        },
        {
          player: player.id,
          newCreditPlayer,
        },
        products,
      );
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
