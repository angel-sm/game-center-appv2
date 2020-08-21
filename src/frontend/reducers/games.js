/* eslint-disable import/named */
import { GET_ALL_GAMES } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
