/* eslint-disable import/named */
import { REGISTER_SALE, GET_HISTORY_SALE } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SALE: {
      return {
        ...state,
        saleId: action.payload,
      };
    }
    case GET_HISTORY_SALE: {
      return {
        ...state,
        historySales: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
