<template>
  <div class="app">
    <div class="weather-app" >
      <DisplayWeather />
    </div>
  </div>
</template>

<script>
import DisplayWeather from './components/DisplayWeather.vue';

export default {
  name: 'WeatherApp',
  components: {
    DisplayWeather,
  },
  mounted() {
    // set the page title in browser tab
    document.title = 'whats-the-weather';
  },
}
</script>

<style>
* {
padding: 0;
margin: 0;
box-sizing: border-box;
}

html {
  background: #1e1d1e;
}

.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
  width: 100vw;
}

.weather-app {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color:azure;  
}

@media screen and (max-width: 465px) {
  .weather-app {
    min-width: 350px;
    padding: 10px;
    width: 95%;
  }
}

@media screen and (max-width: 800px) and (min-width: 465px) {
  .weather-app {
    min-width: 465px;
  }
}

@media screen and (min-width: 800px) {
  .app {
    padding: 5px;
  }
  .weather-app {
    max-width: 1000px;
    box-shadow: 5px 61px 192px -6px rgba(255,255,255,0.1);
  }
}
</style>
