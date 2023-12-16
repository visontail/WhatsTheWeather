const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: '53.1,-0.13'},
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

async function getWeather() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
getWeather();
