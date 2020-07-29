/* eslint-disable import/named */
import { GET_TOURNAMENTS, GET_COMPETITORS, GET_TOURNAMENT } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_COMPETITORS:
      return {
        ...state,
        competitors: action.payload,
      };
    case GET_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.payload,
      };
    case GET_TOURNAMENT:
      return {
        ...state,
        tournament: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
