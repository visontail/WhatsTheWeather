<template>
  <div id="weather-app">
    <h1 id="title">WhatsTheWeather</h1>
    <p id="enter-text">Enter a city to get the current weather</p>
    <SearchForm @search="getWeatherData" />
    <DisplayWeather :weatherData="weatherData" />
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue';
import DisplayWeather from './components/DisplayWeather.vue';
import { fetchWeather } from './services/weatherService';
import { formatWeatherData } from './services/formatData';


export default {
  name: 'WeatherApp',
  data() {
    return {
      weatherData: null,
    };
  },
  methods: {
    async getWeatherData(city) {
      try {
        const data = await fetchWeather(city);
        this.weatherData = formatWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    SearchForm,
    DisplayWeather,
  },
  created() {
    // Load default weather for London when the page is loaded
    this.getWeatherData('London');
  },
}
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  background-color: #144272;
  font-family: 'Montserrat', sans-serif;
}

#weather-app {
  background-color: #0A2647;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.75);
}

#title, #enter-text {
  color: #F0ECE5;
  margin: 0;
}
#title {
  font-size: 1rem;
  font-weight: 50;
  text-align: left;
}
#enter-text {
  padding: 1rem;
  font-size: 2rem;
  text-align: center;

}


</style>
