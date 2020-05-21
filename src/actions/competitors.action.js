import { GET_COMPETITORS } from '../types';

export default getCompetitors = (payload) => ({
  type: GET_COMPETITORS,
  payload,
});
