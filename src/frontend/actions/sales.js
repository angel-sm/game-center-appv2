/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { REGISTER_SALE } from '../types';
import { updatePlayerRequest } from './players';

export const registerSale = (payload) => ({
  type: REGISTER_SALE,
  payload,
});

export const registerPlayerSale = (payload) => ({
  type: REGISTER_PLAYER_SALE,
  payload,
});

export const registerPlayerSalesRequest = (data) => (dispatch) => {
  axios({
    url: '/client/player-sale',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
      console.log(data);
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
      dispatch(updatePlayerRequest(player.player, { credit: player.creditOfPlayer }));
      dispatch(registerSale(data.id));
    })
    .catch((error) => console.log(error));
};
