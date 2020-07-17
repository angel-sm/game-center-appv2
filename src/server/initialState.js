const dotenv = require('dotenv');

dotenv.config();

const initiaState = async (USER, USERM) => {
  let state;

  try {

    state = {
      user: {
        email: USERM,
        id: USER,
      },
      center: centerData.data.center,
      tournaments: tournamentsList.data.tournament,
    };
  } catch (error) {
    state = {
      user: {},
      center: {},
      tournaments: {},
    };
  }
  return state;
};

module.exports = initiaState;
