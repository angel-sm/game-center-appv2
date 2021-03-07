/* eslint-disable no-new */
/* eslint-disable no-async-promise-executor */
/* eslint-disable consistent-return */
require('dotenv').config();
const router = require('express').Router();
const Axios = require('axios');

class PlayersRoutes {
  constructor() {
    this.path = '/client/players';
    this.url = process.env.API;
    this.token = process.env.CLIENT_TOKEN;
  }

  routes(app) {
    app.use(this.path, router);

    router.post('/find', async (req, res) => {
      const { body: player } = req;
      try {
        const { data } = await Axios({
          url: `${this.url}/players/find`,
          method: 'POST',
          data: { ...player },
        });

        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error.response.data);
      }
    });

    router.post('/history', async (req, res) => {
      const { body: player } = req;
      try {
        const { data } = await Axios({
          url: `${this.url}/players/history`,
          method: 'POST',
          data: { ...player },
        });

        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error.response.data);
      }
    });

    router.post('/', async (req, res) => {
      const { body: player } = req;
      try {
        const { data } = await Axios({
          url: `${this.url}/players`,
          method: 'POST',
          data: { ...player },
        });

        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error.response.data);
      }
    });
  }

}

module.exports = PlayersRoutes;

