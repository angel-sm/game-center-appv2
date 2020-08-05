/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { GET_ALL_PLAYERS, SEARCH_PLAYER } from '../types';

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

export const searchPlayerRequest = (id) => (dispatch) => {
  axios({
    url: `/client/players/player/${id}`,
    method: 'GET',
  })
    .then((data) => {
      dispatch(searchPlayer(data.data.player));
    })
    .catch((error) => console.log(error));
};

export const registerPlayerRequest = (data) => (dispatch) => {
  axios({
    url: '/client/players',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
      console.log(data);
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
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};
