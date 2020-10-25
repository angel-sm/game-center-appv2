/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const centerSeasonsRoutes = (app) => {
  const router = express.Router();
  app.use('/client/sales', router);

  router.post('/', async (req, res, next) => {
    const { body: sale } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/sales`,
        method: 'POST',
        data: { ...sale },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

};

module.exports = centerSeasonsRoutes;
