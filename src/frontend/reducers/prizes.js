/* eslint-disable import/named */
import { ADD_PRIZE } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PRIZE:
      return {
        ...state,
        prizes: [...state.prizes.prizes, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
