/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const prizesRoutes = (app) => {
  const router = express.Router();
  app.use('/client/prizes', router);

  router.post('/', async (req, res, next) => {
    const { body: prize } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/prizes`,
        method: 'POST',
        data: {
          tournament: req.cookies.PENDINGID,
          ...prize,
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = prizesRoutes;
