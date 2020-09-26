/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const seasonTournamentsRoutes = (app) => {
  const router = express.Router();
  app.use('/client/season-tournaments', router);

  router.post('/', async (req, res, next) => {
    const { body: relation } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/season-tournaments`,
        method: 'POST',
        data: relation,
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

};

module.exports = seasonTournamentsRoutes;
