/* eslint-disable import/named */
import { GET_PLAYER } from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_PLAYER:
      return {
        ...state,
        players: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
