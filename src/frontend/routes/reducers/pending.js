/* eslint-disable import/named */
import { NEW_TOURNAMENT, STEP_PENDING } from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case STEP_PENDING:
      return {
        ...state,
        step: action.payload,
      };
    case NEW_TOURNAMENT:
      return {
        ...state,
        tournamentId: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
