/* eslint-disable import/named */
import { GET_TOURNAMENTS } from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
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
