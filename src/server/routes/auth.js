/* eslint-disable consistent-return */
const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const Axios = require('axios');

require('../utils/auth/basic');

const authRoutes = (app) => {
  const router = express.Router();
  app.use('/', router);

  router.post('/sign-in', async (req, res, next) => {
    passport.authenticate('basic', (error, data) => {
      try {
        if (error || !data) {
          return next(boom.unauthorized().message);
        }

        req.login(data, { session: false }, async (err) => {
          if (err) {
            return next(boom.unauthorized().message);
          }

          const { token, ...user } = data;

          res.cookie('TOKEN', token, {
            httpOnly: !(process.env.ENV === 'development'),
            secure: !(process.env.ENV === 'development'),
          });

          const center = await Axios({
            url: `${process.env.API_URL}/api/center-users?user=${user.userKey}`,
            method: 'GET',
          });

          res.status(200).json({
            center: center.data.center,
            ...user,
          });
        });
      } catch (err) {
        res.status(500).json('error');
      }
    })(req, res, next);
  });
};

module.exports = authRoutes;
