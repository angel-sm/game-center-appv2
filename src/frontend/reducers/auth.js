import { signIn } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case signIn:
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
