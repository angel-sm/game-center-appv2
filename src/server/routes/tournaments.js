/* eslint-disable consistent-return */
require('dotenv').config();
const router = require('express').Router();
const Axios = require('axios');

class TournamentRoutes {
  constructor() {
    this.path = '/client/tournaments';
    this.url = process.env.API;
    this.token = process.env.CLIENT_TOKEN;

  }

  routes(app) {
    app.use(this.path, router);

    router.post('/', async (req, res) => {
      const { body: tornament } = req;
      await Axios({
        url: `${this.url}/tournaments`,
        method: 'POST',
        data: { ...tornament },
      });
    });

    router.post('/pay', async (req, res) => {
      const { body: pay } = req;
      await Axios({
        url: `${this.url}/tournaments/pay`,
        method: 'POST',
        data: { ...pay },
      });
    });

    router.post('/close', async (req, res) => {
      const { body: description } = req;
      await Axios({
        url: `${this.url}/tournaments/close`,
        method: 'POST',
        data: { ...description },
      });
    });

    router.post('/points-place', async (req, res) => {
      const { body: description } = req;
      await Axios({
        url: `${this.url}/tournaments/points-place`,
        method: 'POST',
        data: { ...description },
      });
    });

    router.get('/', async (req, res) => {
      const { data } = await Axios({
        url: `${this.url}/tournaments?center=1`,
        method: 'GET',
      });
      res.status(200).json(data);
    });
  }

}

module.exports = TournamentRoutes;

