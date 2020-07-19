const dotenv = require('dotenv');

dotenv.config();

const initiaState = async (USER, USERM) => {
  let state;

  try {
    state = {
      auth: {
        user: {
          email: USERM,
          id: USER,
        },
      },
      states: {
        error: '',
      },
    };
  } catch (error) {
    state = {
      auth: {
        user: {},
      },
      states: {
        error: '',
      },
    };
  }
  return state;
};

module.exports = initiaState;
