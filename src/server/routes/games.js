/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const gamesRoutes = (app) => {
  const router = express.Router();
  app.use('/client/games', router);

  router.post('/', async (req, res, next) => {
    const { body: game } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/games`,
        method: 'POST',
        data: game,
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/', async (req, res, next) => {
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/games`,
        method: 'GET',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = gamesRoutes;
