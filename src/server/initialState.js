/* eslint-disable radix */
const dotenv = require('dotenv');

dotenv.config();

const initiaState = async (USER, USERM, PENDINGSTEP, CENTERID, PENDINGID) => {
  let state;
  try {
    state = {
      tournaments: {
        tournament: {},
        tournaments: [],
        competitors: [],
        prizes: [],
        newPaid: false,
        searchResult: [],
      },
      center: {
        id: CENTERID,
      },
      players: {
        players: [],
        player: {},
      },
      pending: {
        tournamentId: PENDINGID,
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
      tournaments: {
        tournament: {},
        tournaments: [],
        competitors: [],
        prizes: [],
        searchResult: [],
      },
      center: {
        id: CENTERID,
      },
      players: {
        players: [],
        player: {},
      },
      pending: {
        tournamentId: PENDINGID,
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
  }
  return state;
};

module.exports = initiaState;
