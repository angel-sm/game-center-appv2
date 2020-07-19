import { setError, setLoad } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case setError:
      return {
        ...state,
        error: action.payload,
      };
    case setLoad:
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
