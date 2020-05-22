import {
  GET_COMPETITORS,
} from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_COMPETITORS:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
