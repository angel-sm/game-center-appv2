/* eslint-disable consistent-return */
const express = require('express');
const Axios = require('axios');

const productsRoutes = (app) => {
  const router = express.Router();
  app.use('/client/products', router);

  router.post('/', async (req, res, next) => {
    const { body: product } = req;
    try {
      const { data } = await Axios({
        url: `${process.env.API_URL}/api/products`,
        method: 'POST',
        data: product,
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = productsRoutes;
