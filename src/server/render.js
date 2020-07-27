/* eslint-disable radix */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';

//import initialState from './initialState';

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : '/assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  return (
    `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <meta charset="utf-8" />
          <link rel="stylesheet" href="${mainStyles}" type="text/css"/>
          <title>Incidencias Runasys</title>
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
      </html>`
  );
};

const renderApp = async (req, res) => {
  const { USER, USERM, PENDINGSTEP, TOKEN, CENTERID } = req.cookies;
  let state;
  try {
    state = {
      tournaments: {
        tournament: {},
        tournaments: [],
        competitors: [],
        prizes: [],
      },
      center: {
        id: CENTERID,
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
  const store = createStore(reducer, state);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(USER && USERM && USER !== undefined && USERM !== undefined && USER.length === 24 && TOKEN))}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};

export default renderApp;
