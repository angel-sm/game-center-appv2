import { setError } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case setError:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
