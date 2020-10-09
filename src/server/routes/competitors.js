/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

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
          player: competitor.id,
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/tournament/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/competitors?tournament=${id}`,
        method: 'GET',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.put('/paid/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/competitors/paid/${id}`,
        method: 'PUT',
        data: {
          paid: 'paid',
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.put('/set-points-place/:id/points/:points/place/:place', async (req, res, next) => {
    const { id, points, place } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/competitors/set-points-place/${id}`,
        method: 'PUT',
        data: {
          points,
          place,
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

};

module.exports = playersRoutes;
