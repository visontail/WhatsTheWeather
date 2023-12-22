<template>
    <h1 id="title">Weather App</h1>
    <SearchForm @search="getWeatherData" />
    <DisplayWeather :weatherData="weatherData"/>
</template>

<script>
import SearchForm from './components/SearchForm.vue';
import DisplayWeather from './components/DisplayWeather.vue';
import { fetchWeather } from './services/weatherService';

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
        this.weatherData = await fetchWeather(city);
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    SearchForm,
    DisplayWeather,
  },
}
</script>

<style scoped>
#weather-app {
  background-color: #161A30;
  color: #F0ECE5
}
#title {
  font-size: 3rem;
  font-weight: 300;
  margin: 0;
  padding: 1rem;
  text-align: center;
}
</style>
