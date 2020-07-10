import {
  GET_COMPETITORS,
  signIn,
} from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_COMPETITORS:
      return {
        ...state,
      };
    case signIn:
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
