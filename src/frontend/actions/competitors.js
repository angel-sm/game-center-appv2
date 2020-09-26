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
  console.log(data);
  axios({
    url: '/client/competitors',
    method: 'POST',
    data: {
      id: data,
    },
  })
    .then((data) => {
      console.log(data.data);
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
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

export const setPointsCompetitorRequest = (id, points) => (dispatch) => {
  axios({
    url: `/client/competitors/set-points/${id}/points/${points}`,
    method: 'PUT',
  })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

export const nextRoundRequest = (id) => (dispatch) => {
  axios({
    url: `/client/competitors/set-points/${id}/reset`,
    method: 'PUT',
  })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};
