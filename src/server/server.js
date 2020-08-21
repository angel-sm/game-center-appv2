/* eslint-disable prefer-const */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import getManifest from './getManifest';
import auth from './routes/auth';
import tournamentRoutes from './routes/tournaments';
import playersRoutes from './routes/players';
import competitorsRoutes from './routes/competitors';
import prizesRoutes from './routes/prizes';
import renderApp from './render';
import centerTournamentRoutes from './routes/centerTournaments';
import centerSeasonsRoutes from './routes/centerSeasons';
import seasonsRoutes from './routes/seasons';
import gamesRoutes from './routes/games';
import seasonGameRoutes from './routes/seasonGame';
import tournamentsGameRoutes from './routes/tournamentsGame';
import seasonTournamentsRoutes from './routes/seasonTournaments';

dotenv.config();

const app = express();
const { ENV, PORT } = process.env;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

if (ENV === 'development') {
  const webPackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webPackConfig);
  const serverConfig = { port: PORT, hot: true };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    req.hashManifest = getManifest();
    next();
  });
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

auth(app);
tournamentRoutes(app);
playersRoutes(app);
competitorsRoutes(app);
prizesRoutes(app);
centerTournamentRoutes(app);
seasonsRoutes(app);
gamesRoutes(app);
seasonGameRoutes(app);
centerSeasonsRoutes(app);
tournamentsGameRoutes(app);
seasonTournamentsRoutes(app);

app.get('*', renderApp);

app.listen(PORT || 3001, (err) => {
  if (!err) console.log(`Server listen in http://localhost:${PORT || 3001}`);
});
