/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { GET_ALL_GAMES } from '../types';

export const getAllGames = (payload) => ({
  type: GET_ALL_GAMES,
  payload,
});

export const registerGameRequest = (data) => (dispatch) => {
  console.log(data);
  axios({
    url: '/client/games',
    method: 'POST',
    data,
  })
    .then((data) => {
      console.log(data.data);
    })
    .catch((error) => console.log(error));
};

export const getAllGamesRequest = () => (dispatch) => {
  axios({
    url: '/client/games',
    method: 'GET',
  })
    .then(({ data }) => {
      dispatch(getAllGames(data.games));
    })
    .catch((error) => console.log(error));
};
