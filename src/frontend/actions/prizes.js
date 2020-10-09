import axios from 'axios';
import { GET_PRIZE } from '../types';
import { setErrorRequest } from './status';
import { getPlayerPrizes } from './players';
import { getTournamentInfoPrizes } from './tournaments';

export const getPrizes = (payload) => ({
  type: GET_PRIZE,
  payload,
});

export const addPrizeRequest = (data) => (dispatch) => {
  axios({
    url: '/client/prizes',
    method: 'POST',
    data,
  })
    .then((data) => {
      dispatch(setErrorRequest(''));
    })
    .catch((error) => console.log(error));
};

export const relationPlayerPrizeRequest = (data) => (dispatch) => {
  axios({
    url: '/client/prizes/player',
    method: 'POST',
    data,
  })
    .then((data) => {
      dispatch(setErrorRequest(''));
    })
    .catch((error) => console.log(error));
};

export const getPrizesRequest = (id) => (dispatch) => {
  console.log('si');
  axios({
    url: `/client/prizes/tournament/${id}`,
    method: 'GET',
  })
    .then(({ data }) => {
      dispatch(getPrizes(data.prizes));
    })
    .then((data) => {
      dispatch(setErrorRequest(''));
    })
    .catch((error) => console.log(error));
};

export const getPrizesByRequest = (searchBy, id) => (dispatch) => {
  axios({
    url: `/client/prizes/${searchBy}/${id}`,
    method: 'GET',
  })
    .then(({ data }) => {
      searchBy === 'player' ? dispatch(getPlayerPrizes(data.prizes)) : dispatch(getTournamentInfoPrizes(data.prizes));
    })
    .catch((error) => console.log(error));
};
