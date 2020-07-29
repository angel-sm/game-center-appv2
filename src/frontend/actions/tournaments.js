/* eslint-disable import/named */
/* eslint-disable no-restricted-globals */
import Axios from 'axios';
import { NEW_TOURNAMENT, GET_TOURNAMENTS, GET_TOURNAMENT } from '../types';
import { nextStep } from './pending';

export const newTournament = (payload) => ({
  type: NEW_TOURNAMENT,
  payload,
});

export const getTournaments = (payload) => ({
  type: GET_TOURNAMENTS,
  payload,
});

export const getTournament = (payload) => ({
  type: GET_TOURNAMENT,
  payload,
});

export const relationCenterTournament = (id) => (dispatch) => {
  Axios({
    url: '/client/center-tournaments',
    method: 'POST',
    data: {
      id,
    },
  })
    .catch((error) => {
      console.log(error);
    });
};

export const newtournamentRequest = (data) => (dispatch) => {
  Axios({
    url: '/client/tournaments',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
      dispatch(newTournament(data.id));
      dispatch(nextStep(1));
      document.cookie = `PENDINGID=${data.id}`;
      dispatch(relationCenterTournament(data.id));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTournamentRequest = (id) => (dispatch) => {
  Axios({
    url: `/client/tournaments/${id}`,
    method: 'GET',
  })
    .then(({ data }) => {
      dispatch(getTournament(data.tournament));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRequest = (data, search) => (dispatch) => {
  Axios({
    url: `/client/center-${search}/center/${data.id}`,
    method: 'GET',
  })
    .then(({ data }) => {
      dispatch(getTournaments(data.tournaments));
    })
    .catch((error) => {
      console.log(error);
    });
};
