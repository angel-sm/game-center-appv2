/* eslint-disable consistent-return */
import express from 'express';
import Axios from 'axios';

const tournamentRoutes = (app) => {
  const router = express.Router();
  app.use('/client/tournaments', router);

  router.get('/', async (req, res, next) => {
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/tournaments`,
        method: 'GET',
      });
      console.log(data);
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
