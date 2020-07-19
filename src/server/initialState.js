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
      status: {
        error: '',
        load: false,
      },
    };
  } catch (error) {
    state = {
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
