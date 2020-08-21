/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const seasonsRoutes = (app) => {
  const router = express.Router();
  app.use('/client/seasons', router);

  router.post('/', async (req, res, next) => {
    const { body: season } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/seasons`,
        method: 'POST',
        data: season,
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = seasonsRoutes;
