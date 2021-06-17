const https = require('https');
const host = 'https://www.boredapi.com/api';

const { getActivityByParticipants } = require('./participants/participants');
const { getActivityByPrice } = require('./price/price');

const getActivity = () => {
  https.get(`${host}/activity`, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      let str = '';
      try {
        const fullResponse = JSON.parse(data);
        if (fullResponse && fullResponse.activity) {
          str = `Hey, you should ${fullResponse.activity.toLowerCase()}.`;
        } else if (fullResponse && fullResponse.error) {
          str = `Oh, no! ${fullResponse.error}!`
        }
      } catch {
        str = "Couldn't parse the downstream response.";
      }
      console.log(str);
      return str;
    });
    
  }).on('error', (error) => {
    console.log('Error: ', error);
    return error;
  });
};

module.exports = { getActivity, getActivityByParticipants, getActivityByPrice };
