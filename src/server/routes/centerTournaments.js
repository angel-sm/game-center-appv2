/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const centerTournamentRoutes = (app) => {
  const router = express.Router();
  app.use('/client/center-tournaments', router);

  router.get('/center/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/center-tournaments?center=${id}`,
        method: 'GET',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: tournament } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/center-tournaments`,
        method: 'POST',
        data: {
          tournament: tournament.id,
          center: req.cookies.CENTERID,
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.delete('/tournament/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/center-tournaments/${id}`,
        method: 'DELETE',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = centerTournamentRoutes;
