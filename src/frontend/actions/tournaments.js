/* eslint-disable import/named */
/* eslint-disable no-restricted-globals */
import Axios from 'axios';
import { NEW_TOURNAMENT, GET_TOURNAMENTS, GET_TOURNAMENT, SEARCH_RESULT, GET_TOURNAMENT_INFO_PRIZES } from '../types';
import { nextStep } from './pending';

export const newTournament = (payload) => ({
  type: NEW_TOURNAMENT,
  payload,
});

export const getTournamentInfoPrizes = (payload) => ({
  type: GET_TOURNAMENT_INFO_PRIZES,
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

export const relationTournamentGame = (game, tournament) => (dispatch) => {
  Axios({
    url: '/client/tournaments-game',
    method: 'POST',
    data: {
      tournament,
      game,
    },
  })
    .catch((error) => {
      console.log(error);
    });
};

export const newtournamentRequest = (data, game) => (dispatch) => {
  console.log(game);
  Axios({
    url: '/client/tournaments',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
      dispatch(nextStep(1));
      dispatch(relationCenterTournament(data.id));
      dispatch(relationTournamentGame(game, data.id));
      dispatch(newTournament(data.id));
      document.cookie = `PENDINGID=${data.id}`;
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
      dispatch(searchResult(data.tournament));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTournamentsRequest = (data, search) => (dispatch) => {
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
    .then(() => {
      window.location.href = '/registertournament';
    })
    .catch((error) => {
      console.log(error);
    });
};
