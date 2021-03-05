/* eslint-disable import/named */
import { GET_TOURNAMENTS, GET_TOURNAMENT_ID_TAB } from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_TOURNAMENT_ID_TAB:
      return {
        ...state,
        tournament_id_tab: action.payload,
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
