const fetch = require('cross-fetch');
require('dotenv').config({ path: `.env.development.local` });

exports.handler = async (event) => {

  const search = event.queryStringParameters.search;

  try {
    const resp = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${search}&type=stretching`,
      {
        headers: {
          'X-Api-Key': `${process.env.REACT_APP_X_API_KEY}`
        }
      }
    );
    console.log('resp', resp);
    const data = await resp.json();
    console.log('data', data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
   
    // eslint-disable-next-line no-console
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};