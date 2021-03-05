/* eslint-disable camelcase */
/* eslint-disable handle-callback-err */
/* eslint-disable import/named */
import axios from 'axios';
import { GET_TOURNAMENTS, GET_TOURNAMENT_ID_TAB } from '../../types';

export const get_tournaments = (payload) => ({
  type: GET_TOURNAMENTS,
  payload,
});

export const get_tournament_id_tab = (payload) => ({
  type: GET_TOURNAMENT_ID_TAB,
  payload,
});

export const rqGetTournaments = () => async (dispatch) => {
  axios({
    url: '/client/tournaments',
    method: 'GET',
  })
    .then(({ data }) => {
      dispatch(get_tournaments(data));
    })
    .catch((error) => {
      dispatch(setErrorRequest('Usuario o contraseña incorrectos'));
    });
};

export const rqNewTournaments = (data) => async (dispatch) => {
  console.log(data);
  axios({
    url: '/client/tournaments',
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

export const rqPay = (data) => async (dispatch) => {
  axios({
    url: '/client/tournaments/pay',
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

export const rqEditPlaceAndPoints = (data) => async (dispatch) => {
  axios({
    url: '/client/tournaments/points-place',
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

export const rqCloseTournament = (data) => async (dispatch) => {
  console.log(data);
  axios({
    url: '/client/tournaments/close',
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
