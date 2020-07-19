import { signIn } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
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
