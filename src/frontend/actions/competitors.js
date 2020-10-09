/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { GET_COMPETITORS, SET_PAID } from '../types';

export const getCompetitors = (payload) => ({
  type: GET_COMPETITORS,
  payload,
});

export const setPaid = (payload) => ({
  type: SET_PAID,
  payload,
});

export const registerCompetitorsRequest = (data) => (dispatch) => {
  axios({
    url: '/client/competitors',
    method: 'POST',
    data: {
      id: data,
    },
  })
    .catch((error) => console.log(error));
};

export const getCompetitorsRequest = (id) => (dispatch) => {
  axios({
    url: `/client/competitors/tournament/${id}`,
    method: 'GET',
  })
    .then(({ data }) => {
      dispatch(getCompetitors(data.competitors));
    })
    .catch((error) => console.log(error));
};

export const paidCompetitorRequest = (id) => (dispatch) => {
  axios({
    url: `/client/competitors/paid/${id}`,
    method: 'PUT',
  })
    .catch((error) => console.log(error));
};

export const setPointsCompetitorRequest = (id, points, place) => (dispatch) => {
  axios({
    url: `/client/competitors/set-points-place/${id}/points/${points}/place/${place}`,
    method: 'PUT',
  })
    .catch((error) => console.log(error));
};
