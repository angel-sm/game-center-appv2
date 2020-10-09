/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const tournamentsGameRoutes = (app) => {
  const router = express.Router();
  app.use('/client/tournaments-game', router);

  router.post('/', async (req, res, next) => {
    const { body: dataRelation } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/tournaments-game`,
        method: 'POST',
        data: dataRelation,
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);

    }
  });
};

module.exports = tournamentsGameRoutes;
