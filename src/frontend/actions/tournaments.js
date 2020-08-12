/* eslint-disable import/named */
/* eslint-disable no-restricted-globals */
import Axios from 'axios';
import { NEW_TOURNAMENT, GET_TOURNAMENTS, GET_TOURNAMENT, SEARCH_RESULT } from '../types';
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

export const searchResult = (payload) => ({
  type: SEARCH_RESULT,
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

export const searchTournamentRequest = (data) => (dispatch) => {
  const { tournament, game } = data;
  Axios({
    url: `/client/tournaments/tournament/${tournament}/game/${game}`,
    method: 'GET',
  })
    .then(({ data }) => {
      console.log(data);
      dispatch(searchResult(data.tournament));
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

export const closeTournamentRequest = (id, data) => (dispatch) => {
  Axios({
    url: `/client/tournaments/tournament/${id}`,
    method: 'PUT',
    data,
  })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const cancelRegisterTournamentRequest = (id) => (dispatch) => {
  console.log(id);
  Axios({
    url: `/client/center-tournaments/tournament/${id}`,
    method: 'DELETE',
  })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
