const axios = require('axios');

// Get API key from .env file
const apiKey = process.env.VUE_APP_WEATHER_API_KEY;

// Set options for axios request
const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
/**
 * Fetches weather data from RapidAPI Weather API.
 * @param {string} city - The city to fetch weather data for.
 */
async function fetchWeather(city) {
    // Add query parameter to options object
    options.params = { q: city };
      try {
        // Check if process is defined (running in Node.js environment)
        if (typeof process !== 'undefined') {
            const dotenv = await import('dotenv');
            dotenv.config({ path: '../../.env' });
          }
        // Make request
        const response = await axios.request(options);
        // Create data object
        const data = {
          "location": [
            {
              "name": response.data.location.name,
              "region": response.data.location.region,
              "country": response.data.location.country,
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
        return data;
      } catch (error) {
          console.error(error);
          // handle error here
      }
}
// Export fetchWeather function
module.exports = { fetchWeather };
