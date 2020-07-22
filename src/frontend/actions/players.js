/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { GET_ALL_PLAYERS } from '../types';

export const getAllPlayers = (payload) => ({
  type: GET_ALL_PLAYERS,
  payload,
});

export const getAllPlayersRequest = () => (dispatch) => {
  axios({
    url: '/client/players',
    method: 'GET',
  })
    .then((data) => {
      dispatch(getAllPlayers(data.data.players));
    })
    .catch((error) => console.log(error));
};
