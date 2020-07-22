/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { REGISTER_COMPETITOR } from '../types';

export const registerCompetitors = (payload) => ({
  type: REGISTER_COMPETITOR,
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

