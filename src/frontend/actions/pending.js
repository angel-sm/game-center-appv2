import { STEP_PENDING } from '../types';

export const setStepPending = (payload) => ({
  type: STEP_PENDING,
  payload,
});

export const nextStep = (step) => (dispatch) => {
  dispatch(setStepPending(step));
  document.cookie = `PENDINGSTEP=${step}`;
};
