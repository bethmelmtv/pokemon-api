const fetch = require('node-fetch');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

//this is where netlify picks up the phone

exports.handler = async (event) => {
  // console.log(event.queryStringParameters);
  try {
    const response = await fetch(
      `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${event.queryStringParameters.pokemonName}`
    );
    const data = await response.json();
    const json = JSON.stringify({ data });

    return {
      statusCode: 200,
      headers,
      body: json,
    };
  } catch (error) {
    // console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
