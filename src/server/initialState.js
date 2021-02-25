/* eslint-disable radix */
const dotenv = require('dotenv');

dotenv.config();

const initiaState = async (USER, USERM) => {
  let state;
  try {
    state = {
      tournaments: [],
      players: [],
      auth: {
        user: {
          email: USERM,
          id: USER,
        },
      },
    };
  } catch (error) {
    state = {
      tournaments: [],
      players: [],
      auth: {
        user: {
          email: USERM,
          id: USER,
        },
      },
    };
  }
  return state;
};

module.exports = initiaState;
