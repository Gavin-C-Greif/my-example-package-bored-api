const https = require('https');
const host = 'https://www.boredapi.com/api';

function getActivity(participants = 1) {
  https.get(`${host}/activity?participants=${participants}`, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      try {
        const fullResponse = JSON.parse(data);
        if (fullResponse && fullResponse.activity) {
          console.log(`Hey, you should ${fullResponse.activity.toLowerCase()}.`);
        } else if (fullResponse && fullResponse.error) {
          console.log(`Oh, no! ${fullResponse.error}!`);
        }
      } catch {
        console.log("Couldn't parse the downstream response.");
      }
    });

    response.on('error', (error) => {
      console.log('Error: ', error);
    })
  })
}

module.exports = { getActivity };