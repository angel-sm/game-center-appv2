/* eslint-disable import/named */
import { SIGNIN, LOGOUT } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload,
        error: '',
        load: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
