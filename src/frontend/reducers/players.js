/* eslint-disable import/named */
import { GET_ALL_PLAYERS, SEARCH_PLAYER } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      return {
        ...state,
        players: action.payload,
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
