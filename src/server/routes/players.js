/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const playersRoutes = (app) => {
  const router = express.Router();
  app.use('/client/players', router);

  router.get('/', async (req, res, next) => {
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/players`,
        method: 'GET',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/player/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/players/player/${id}`,
        method: 'GET',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: player } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/players`,
        method: 'POST',
        data: {
          ...player,
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.put('/player/:id', async (req, res, next) => {
    const { body: player } = req;
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/players/player/${id}`,
        method: 'PUT',
        data: {
          ...player,
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = playersRoutes;
