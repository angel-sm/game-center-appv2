/* eslint-disable import/named */
/* eslint-disable no-restricted-globals */
import Axios from 'axios';
import { NEW_TOURNAMENT } from '../types';
import { nextStep } from './pending';

export const newTournament = (payload) => ({
  type: NEW_TOURNAMENT,
  payload,
});

export const newtournamentRequest = (data) => (dispatch) => {
  Axios({
    url: '/client/tournaments',
    method: 'POST',
    data,
  })
    .then(({ data }) => {
      dispatch(newTournament(data.id));
      dispatch(nextStep(1));
      document.cookie = `PENDINGID=${data.id}`;
    })
    .catch((error) => {
      console.log(error);
    });
};
