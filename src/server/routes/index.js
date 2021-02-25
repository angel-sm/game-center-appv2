/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
const TournamentRoutes = require('./tournaments');
const PlayersRoutes = require('./players');

class Routes {
  constructor() {
  }

  setPrincipalRoutes(app) {
    new TournamentRoutes().routes(app);
    new PlayersRoutes().routes(app);
  }
}

module.exports = Routes;
