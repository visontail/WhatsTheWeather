<template>
  <div id="app">
    <div id="weather-app">
      <DisplayWeather :weatherData="weatherData" />
    </div>
  </div>
</template>

<script>
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
    DisplayWeather,
  },
  created() {
    // Load default weather for London when the page is loaded
    this.getWeatherData('London');
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 40px;
}
#weather-app {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  background-image: url('./assets/backgrounds/storm.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color:azure;  
}

</style>
