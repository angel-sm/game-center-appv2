/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const centerSeasonsRoutes = (app) => {
  const router = express.Router();
  app.use('/client/center-seasons', router);

  router.get('/center/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/center-seasons?center=${id}`,
        method: 'GET',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/season/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/center-seasons/season/${id}`,
        method: 'GET',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: season } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/center-seasons`,
        method: 'POST',
        data: {
          season: season.id,
          center: req.cookies.CENTERID,
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

};

module.exports = centerSeasonsRoutes;
