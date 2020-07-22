/* eslint-disable consistent-return */
import express from 'express';
import Axios from 'axios';

const playersRoutes = (app) => {
  const router = express.Router();
  app.use('/client/players', router);

  router.get('/', async (req, res, next) => {
    console.log('si');
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
};

module.exports = playersRoutes;
