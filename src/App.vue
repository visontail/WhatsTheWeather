<template>
  <div id="app">
    <h1 id="title">Weather App</h1>
    <SearchForm @search="getWeatherData" />
    <DisplayWeather :weatherData="weatherData"/>
  </div>
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
#app {
  background-color: #161A30;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
}
#title {
  font-size: 3rem;
  font-weight: 300;
}
#title {
  text-align: center;
  color: #F0ECE5;
  margin: 0;
  padding: 1rem;
}
</style>
