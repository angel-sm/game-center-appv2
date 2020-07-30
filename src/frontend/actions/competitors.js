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
  console.log(id);
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
  console.log(id);
  axios({
    url: `/client/competitors/paid/${id}`,
    method: 'PUT',
  })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

