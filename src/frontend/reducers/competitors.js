/* eslint-disable import/named */
import { REGISTER_COMPETITOR } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_COMPETITOR:
      return {
        ...state,
        competitors: [...state.competitors.competitors, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
