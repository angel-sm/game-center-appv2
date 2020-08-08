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

export const searchPlayerRequest = (nickname) => (dispatch) => {
  console.log(nickname);
  axios({
    url: `/client/players/player/${nickname}`,
    method: 'GET',
  })
    .then(({ data }) => {
      const [player] = data.player;
      if (player !== undefined) {
        dispatch(searchPlayer(player));
      }
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
