/* eslint-disable camelcase */
/* eslint-disable handle-callback-err */
/* eslint-disable import/named */
import axios from 'axios';
import { GET_PLAYER, GET_PLAYER_HISTORY } from '../types';

export const get_player = (payload) => ({
  type: GET_PLAYER,
  payload,
});

export const get_player_history = (payload) => ({
  type: GET_PLAYER_HISTORY,
  payload,
});

export const rqGetPlayer = (data) => async (dispatch) => {
  axios({
    url: '/client/players/find',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
      dispatch(get_player(data));
    })
    .catch((error) => {
      console.log('mi error', error);
    });
};

export const rqGetPlayerHistory = (data) => async (dispatch) => {
  axios({
    url: '/client/players/history',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
      dispatch(get_player_history(data));
    })
    .catch((error) => {
      console.log('mi error', error);
    });
};

export const rqNewPlayer = (data) => async (dispatch) => {
  console.log(data);
  axios({
    url: '/client/players',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      dispatch(setErrorRequest('Usuario o contraseña incorrectos'));
    });
};
