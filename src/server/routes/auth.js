/* eslint-disable consistent-return */
import express from 'express';
import passport from 'passport';
import boom from '@hapi/boom';

import '../utils/auth/basic';

const authRoutes = (app) => {
  const router = express.Router();
  app.use('/', router);

  router.post('/sign-in', async (req, res, next) => {
    passport.authenticate('basic', (error, data) => {
      try {
        if (error || !data) {
          return next(boom.unauthorized());
        }

        req.login(data, { session: false }, async (err) => {
          if (err) {
            return next(boom.unauthorized());
          }

          const { token, ...user } = data;

          res.cookie('_api_token', token, {
            httpOnly: (process.env.ENV === 'development'),
            secure: (process.env.ENV === 'development'),
          });

          res.status(200).json(user);
        });
      } catch (err) {
        next(err);
      }
    })(req, res, next);
  });
};

module.exports = authRoutes;
