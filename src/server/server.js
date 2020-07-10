/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import reducer from '../frontend/reducers';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';
import auth from './routes/auth';

dotenv.config();

const app = express();
const {
  ENV,
  PORT,
} = process.env;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(`${__dirname}/public`));

if (ENV === 'development') {
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
};

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest[main.css] : 'assets/app.css';
  const mainBuild = manifest ? manifest[main.js] : 'assets/app.js';
  const vendorBuild = manifest ? manifest[vendors.js] : 'assets/vendor.js';

  return (`
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href=${mainStyles} type="text/css">
        <title>Game center</title>
      </head>
      <body>
        <div id="App">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c',
    )}
        </script>
          <script src="${mainBuild}"></script>
          <script src="${vendorBuild}"></script>
      </body>
    </html>
  `);
};

const renderApp = async (req, res) => {
  const { USER, USERM } = req.cookies;

  let initialState;

  try {
    initialState = {
      user: {
        email: USERM,
        id: USER,
      },
    };
  } catch (error) {
    initialState = {
      user: {},
    };
  }
  const isLogged = USER && USERM;
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged))}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.get('*', renderApp);
auth(app);

app.listen(PORT || 3001, (err) => {
  if (!err) console.log(`Server listen in http://localhost:${PORT || 3001}`);
});
