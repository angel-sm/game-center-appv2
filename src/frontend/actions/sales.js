/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { REGISTER_SALE, GET_HISTORY_SALE } from '../types';
import { updatePlayerRequest } from './players';

export const getHistory = (payload) => ({
  type: GET_HISTORY_SALE,
  payload,
});

export const registerSale = (payload) => ({
  type: REGISTER_SALE,
  payload,
});

export const registerPlayerSale = (payload) => ({
  type: REGISTER_PLAYER_SALE,
  payload,
});

export const registerHystorySaleRequest = (history) => (dispatch) => {
  axios({
    url: '/client/history-sale',
    method: 'POST',
    data: history,
  })
    .then(({ data }) => {
    })
    .catch((error) => console.log(error));
};

export const registerProductRequest = (productdata, saleId) => (dispatch) => {
  const { id, product, price, quantity, subTotal } = productdata;
  axios({
    url: '/client/products',
    method: 'POST',
    data: {
      id,
      product,
      price,
    },
  })
    .then(({ data }) => {
      dispatch(registerHystorySaleRequest({
        product: data.id,
        quantity,
        totalPrice: subTotal,
        sale: saleId }));
    })
    .catch((error) => console.log(error));
};

export const registerPlayerSalesRequest = (data) => (dispatch) => {
  axios({
    url: '/client/player-sale',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
    })
    .catch((error) => console.log(error));
};

export const registerSaleRequest = (data, player, productList) => (dispatch) => {
  axios({
    url: '/client/sales',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
      dispatch(registerPlayerSalesRequest({ sale: data.id, player: player.player }));
      dispatch(updatePlayerRequest(player.player, { credit: player.newCreditPlayer }));
      productList.forEach((product) => {
        dispatch(registerProductRequest(product, data.id));
      });
      dispatch(registerSale(data.id));
    })
    .catch((error) => console.log(error));
};

export const getHistoryRequest = (player) => (dispatch) => {
  axios({
    url: `/client/history-sale/player/${player}`,
    method: 'GET',
  })
    .then(({ data }) => {
      dispatch(getHistory(data.historys));
    })
    .catch((error) => console.log(error));
};
