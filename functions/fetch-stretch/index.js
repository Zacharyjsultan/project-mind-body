const fetch = require('cross-fetch');
require('dotenv').config({ path: `.env.development.local` });

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

exports.handler = async (event) => {

  const search = event.queryStringParameters.search;

  try {
    const resp = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${search}`,
      {
        headers: {
          'X-Api-Key': `${process.env.REACT_APP_X_API_KEY}`
        }
      }
    );
    const data = await resp.json();
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data.instructions),
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