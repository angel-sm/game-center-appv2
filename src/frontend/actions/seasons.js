/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { GET_SEASONS, GET_SEASON } from '../types';

export const getSeasons = (payload) => ({
  type: GET_SEASONS,
  payload,
});

export const getSeason = (payload) => ({
  type: GET_SEASON,
  payload,
});

export const relationCenterSeasonRequest = (id) => (dispatch) => {
  axios({
    url: '/client/center-seasons',
    method: 'POST',
    data: {
      id,
    },
  })
    .catch((error) => {
      console.log(error);
    });
};

export const seasonGameRelationRequest = (relation) => (dispatch) => {
  axios({
    url: '/client/season-game',
    method: 'POST',
    data: relation,
  })
    .catch((error) => console.log(error));
};

export const registerSeasonRequest = (season, game) => (dispatch) => {
  axios({
    url: '/client/seasons',
    method: 'POST',
    data: season,
  })
    .then(({ data }) => {
      dispatch(relationCenterSeasonRequest(data.id));
      dispatch(seasonGameRelationRequest({
        season: data.id,
        game,
      }));
    })
    .then(() => {
      window.location.href = 'config-points';
    })
    .catch((error) => console.log(error));
};

export const getSeasonsRequest = (data, search) => (dispatch) => {
  axios({
    url: `/client/center-${search}/center/${data.id}`,
    method: 'GET',
  })
    .then(({ data }) => {
      dispatch(getSeasons(data.seasons));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSeasonRequest = (id) => (dispatch) => {
  axios({
    url: `/client/center-seasons/season/${id}`,
    method: 'GET',
  })
    .then(({ data }) => {
      dispatch(getSeason(data.season));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const relationSeasonTournament = (season, tournament) => (dispatch) => {
  axios({
    url: '/client/season-tournaments',
    method: 'POST',
    data: {
      season,
      tournament,
    },
  })
    .catch((error) => {
      console.log(error);
    });
};
