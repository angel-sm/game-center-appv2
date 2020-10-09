const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

passport.use(new BasicStrategy((email, password, cb) => {
  axios({
    url: `${process.env.API_URL}/api/auth/sign-in`,
    method: 'POST',
    auth: {
      password,
      username: email,
    },
    data: {
      apiKeyToken: process.env.API_KEY_TOKEN,
    },
  })
    .then(({ data }) => {
      cb(null, data);
    })
    .catch(({ respose }) => {
      return cb(respose, false);
    });
}));
