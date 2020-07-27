/* eslint-disable import/named */
import { RETRIBE_COMPETITOR, GET_TOURNAMENTS } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case RETRIBE_COMPETITOR:
      return {
        ...state,
        competitors: [...state.competitors.competitors, action.payload],
      };
    case GET_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
