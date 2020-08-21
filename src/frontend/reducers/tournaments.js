/* eslint-disable import/named */
import { GET_TOURNAMENTS, GET_TOURNAMENT, GET_COMPETITORS, SET_PAID, SEARCH_RESULT, NEW_TOURNAMENT } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PAID:
      return {
        ...state,
        newPay: action.payload,
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };
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
    case NEW_TOURNAMENT:
      return {
        ...state,
        tournamentId: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
