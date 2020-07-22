import axios from 'axios';
import { ADD_PRIZE } from '../types';

export const addPrize = (payload) => ({
  type: ADD_PRIZE,
  payload,
});

export const addPrizeRequest = (data) => (dispatch) => {
  axios({
    url: '/client/prizes',
    method: 'POST',
    data,
  })
    .then((data) => {
      console.log(data.data);
    })
    .catch((error) => console.log(error));
};
