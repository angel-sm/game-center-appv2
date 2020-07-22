/* eslint-disable radix */
const dotenv = require('dotenv');

dotenv.config();

const initiaState = async (USER, USERM, PENDINGSTEP) => {
  let state;
  try {
    console.log('estado bien');
    state = {
      competitors: {
        competitors: [],
      },
      players: {
        players: [],
      },
      pending: {
        tournamentId: '',
        step: parseInt(PENDINGSTEP),
      },
      auth: {
        user: {
          email: USERM,
          id: USER,
        },
      },
      status: {
        error: '',
        load: false,
      },
    };
  } catch (error) {
    console.log(error);
    state = {
      players: {
        players: [],
      },
      pending: {
        tournamentId: '',
        step: -1,
      },
      auth: {
        user: {},
      },
      status: {
        error: '',
        load: false,
      },
    };
  }
  return state;
};

module.exports = initiaState;
