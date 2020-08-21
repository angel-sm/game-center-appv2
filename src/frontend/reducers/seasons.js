/* eslint-disable import/named */
import { GET_SEASONS, GET_SEASON } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_SEASONS:
      return {
        ...state,
        seasons: action.payload,
      };
    case GET_SEASON:
      return {
        ...state,
        season: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
