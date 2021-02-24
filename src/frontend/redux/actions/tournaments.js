/* eslint-disable camelcase */
/* eslint-disable handle-callback-err */
/* eslint-disable import/named */
import axios from 'axios';
import { GET_TOURNAMENTS } from '../../types';

export const get_tournaments = (payload) => ({
  type: GET_TOURNAMENTS,
  payload,
});

export const rqGetTournaments = () => async (dispatch) => {
  axios({
    url: '/client/tournaments',
    method: 'GET',
  })
    .then(({ data }) => {
      console.log(data);
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
