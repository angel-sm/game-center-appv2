/* eslint-disable import/named */
import { GET_ALL_PLAYERS, SEARCH_PLAYER, GET_PLAYER_PRIZES, RESET_PLAYER } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case RESET_PLAYER: {
      return {
        ...state,
        player: action.payload,
      };
    }
    case GET_ALL_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case GET_PLAYER_PRIZES:
      return {
        ...state,
        playerPrizes: action.payload,
      };
    case SEARCH_PLAYER:
      return {
        ...state,
        player: action.payload,
        error: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
