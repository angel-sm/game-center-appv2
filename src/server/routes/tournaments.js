/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const tournamentRoutes = (app) => {
  const router = express.Router();
  app.use('/client/tournaments', router);

  router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/tournaments/tournament/${id}`,
        method: 'GET',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: tornament } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/tournaments`,
        method: 'POST',
        data: tornament,
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);

    }
  });
};

module.exports = tournamentRoutes;
