/* eslint-disable import/named */
import { STEP_PENDING } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case STEP_PENDING:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
