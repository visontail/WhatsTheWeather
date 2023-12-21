<template>
  <div id="weather-app">
    <h1 id="title">Weather App</h1>
    <button @click="getWeatherData('London')">London</button>
  </div>
</template>

<script>
import { fetchWeather } from '@/services/weatherService.js';

export default {
  name: 'WeatherApp',
  methods: {
    async getWeatherData(city) {
      try {
        this.weatherData = await fetchWeather(city);
      } catch (error) {
        console.error(error);
      }
    },
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
