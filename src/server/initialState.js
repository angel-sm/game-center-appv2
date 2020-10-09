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
        searchResult: [],
        tournamentId: PENDINGID,
        prizesInfo: [],
      },
      seasons: {
        seasons: [],
        season: {},
      },
      games: {
        games: [],
      },
      center: {
        id: CENTERID,
      },
      players: {
        players: [],
        player: {},
        playerPrizes: [],
      },
      pending: {
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
      games: {
        games: [],
      },
      seasons: {
        seasons: [],
        season: {},
      },
      tournaments: {
        tournament: {},
        tournaments: [],
        competitors: [],
        prizes: [],
        searchResult: [],
        tournamentId: PENDINGID,
      },
      center: {
        id: CENTERID,
      },
      players: {
        players: [],
        player: {},
      },
      pending: {
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
