/* eslint-disable import/named */
import { REGISTER_SALE } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SALE: {
      return {
        ...state,
        saleId: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
