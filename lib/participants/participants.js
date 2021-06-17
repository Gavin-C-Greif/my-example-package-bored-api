const https = require('https');
const host = 'https://www.boredapi.com/api';

exports.getActivityByParticipants = (participants = 1) => {
  https.get(`${host}/activity?participants=${participants}`, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      let str = '';
      try {
        const fullResponse = JSON.parse(data);
        if (fullResponse && fullResponse.activity) {
          str = `Hey, you should ${fullResponse.activity.toLowerCase()}. It's a good activity for ${participants > 1 ? participants + ' people' : '1 person'}`;
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
  })
};
