const Axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const initiaState = async (USER, USERM) => {
  let state;

  try {
    const uri = `${process.env.API_URL}/api`;
    let centerData;

    if (USER !== undefined && USERM !== undefined) {
      const centersRequest = await Axios({
        url: `${uri}/center-employees/${USER}`,
        method: 'GET',
      });

      centerData = await Axios({
        url: `${uri}/centers/${centersRequest.data.employee.center}`,
        method: 'GET',
      });
    }

    state = {
      user: {
        email: USERM,
        id: USER,
      },
      center: centerData.data.center,
    };
  } catch (error) {
    state = {
      user: {},
    };
  }
  return state;
};

module.exports = initiaState;
