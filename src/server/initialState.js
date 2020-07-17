const Axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const initiaState = async (USER, USERM) => {
  let state;

  try {
    const uri = `${process.env.API_URL}/api`;
    let centerData;
    let tournamentsList;

    if (USER !== undefined && USERM !== undefined) {
      const centersRequest = await Axios({
        url: `${uri}/center-employees/${USER}`,
        method: 'GET',
      });

      centerData = await Axios({
        url: `${uri}/centers/${centersRequest.data.employee.center}`,
        method: 'GET',
      });

      tournamentsList = await Axios({
        url: `${uri}/center-tournaments/tournament?center=${centerData.data.center.id}`,
        method: 'GET',
      });
    }

    state = {
      user: {
        email: USERM,
        id: USER,
      },
      center: centerData.data.center,
      tournaments: tournamentsList.data.tournament,
    };
  } catch (error) {
    state = {
      user: {},
      center: {},
      tournaments: {},
    };
  }
  return state;
};

module.exports = initiaState;
