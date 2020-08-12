import axios from 'axios';
import { ADD_PRIZE } from '../types';
import { setErrorRequest } from './status';

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
      dispatch(setErrorRequest(''));
    })
    .catch((error) => console.log(error));
};
