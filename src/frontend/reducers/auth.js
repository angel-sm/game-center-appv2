/* eslint-disable import/named */
import { SIGNIN } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload,
        error: '',
        load: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
