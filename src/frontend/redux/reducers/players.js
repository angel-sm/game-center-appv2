/* eslint-disable import/named */
import { GET_PLAYER, GET_PLAYER_HISTORY } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_PLAYER:
      return {
        ...state,
        players: action.payload,
      };
    case GET_PLAYER_HISTORY:
      return {
        ...state,
        player_histoty: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
