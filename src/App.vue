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
  mounted() {
    // set the page title in browser tab
    document.title = 'whats-the-weather';
  },
}
</script>

<style>
html {
  background: #1e1d1e;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#weather-app {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  background-image: url('./assets/backgrounds/clear.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color:azure;  
}

@media screen and (max-width: 800px) {
  #app {
    padding: 5px;
  }
  #weather-app {
    background-image: none;
    background-color: #96B6C5;
    min-width: 500px;
  }
}

@media screen and (min-width: 800px) {
  #app {
    padding: 5px;
  }
  #weather-app {
    max-width: 1000px;
  }
}


</style>
