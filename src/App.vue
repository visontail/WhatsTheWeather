<template>
  <div id="weather-app">
    <h1 id="title">Weather App</h1>
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
  background-color: #B6BBC4;
}

#weather-app {
  background-color: #161A30;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.75);
}

#title {
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  color: #F0ECE5;
  margin: 0;
  padding: 1rem;
}
</style>
