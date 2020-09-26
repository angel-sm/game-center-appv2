/* eslint-disable import/named */
import { ERROR, LOAD } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD:
      return {
        ...state,
        load: action.payload,
        error: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
