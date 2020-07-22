/* eslint-disable consistent-return */
import express from 'express';
import Axios from 'axios';

const playersRoutes = (app) => {
  const router = express.Router();
  app.use('/client/competitors', router);

  router.post('/', async (req, res, next) => {
    const { body: competitor } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/competitors`,
        method: 'POST',
        data: {
          tournament: req.cookies.PENDINGID,
          ...competitor,
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = playersRoutes;