const https = require('https');
const host = 'https://www.boredapi.com/api';

exports.getActivityByPrice = (price = 0.0) => {

  https.get(`${host}/activity?price=${price > 0.6 ? 0.6 : price}`, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      let str = '';
      try {
        const fullResponse = JSON.parse(data);
        if (fullResponse && fullResponse.activity) {
          str = `Hey, you should ${fullResponse.activity.toLowerCase()}. It's a good activity for the price scale ${price}`;
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
