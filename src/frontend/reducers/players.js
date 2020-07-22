/* eslint-disable import/named */
import { GET_ALL_PLAYERS } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
