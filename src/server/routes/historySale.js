/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const historySaleRoutes = (app) => {
  const router = express.Router();
  app.use('/client/history-sale', router);

  router.post('/', async (req, res, next) => {
    const { body: history } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/history-sale`,
        method: 'POST',
        data: { ...history },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/player/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/history-sale?player=${id}`,
        method: 'GET',
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });

};

module.exports = historySaleRoutes;
