/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { GET_ALL_PLAYERS, SEARCH_PLAYER } from '../types';
import { setErrorRequest } from './status';

export const getAllPlayers = (payload) => ({
  type: GET_ALL_PLAYERS,
  payload,
});

export const searchPlayer = (payload) => ({
  type: SEARCH_PLAYER,
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

export const searchPlayerRequest = (nickname) => (dispatch) => {
  axios({
    url: `/client/players/player/${nickname}`,
    method: 'GET',
  })
    .then(({ data }) => {
      const [player] = data.player;
      console.log(player);
      player !== undefined ? dispatch(searchPlayer(player)) :
        dispatch(setErrorRequest('No existe ningun jugador con ese nombre'));
    })
    .catch((error) => console.log(error));
};

export const registerPlayerRequest = (data) => (dispatch) => {
  axios({
    url: '/client/players',
    method: 'POST',
    data,
  })
    .catch((error) => console.log(error));
};

export const updatePlayerRequest = (id, data) => (dispatch) => {
  axios({
    url: `/client/players/player/${id}`,
    method: 'PUT',
    data,
  })
    .then(({ data }) => {
      dispatch(searchPlayerRequest(id));
    })
    .catch((error) => console.log(error));
};

export const deletePlayerRequest = (id) => (dispatch) => {
  axios({
    url: `/client/players/player/${id}`,
    method: 'DELETE',
  })
    .catch((error) => console.log(error));
};
