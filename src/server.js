const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});

const city = 'Fort-Walton-Beach';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: city},
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

export async function fetchWeatherData() {
    try {
        const response = await axios.request(options);
        const data = {
          "location": [
            {
              "name": response.data.location.name,
              "region": response.data.location.region,
              "country": response.data.location.country,
              "lat": response.data.location.lat,
              "lon": response.data.location.lon,
              "localtime": response.data.location.localtime
            }
          ],
          "weather": [
            {
              "tempC": response.data.current.temp_c,
              "tempF": response.data.current.temp_f,
              "condition": response.data.current.condition.text,
              "feelsLikeC": response.data.current.feelslike_c,
              "feelsLikeF": response.data.current.feelslike_f
            }
          ],
        }
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchWeatherData();