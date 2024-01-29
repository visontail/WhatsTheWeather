<template>
  <div id="app">
    <div id="weather-app" >
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
html {
  background: #1e1d1e;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
  width: 100vw;
}
#weather-app {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  color:azure;  
}

@media screen and (max-width: 800px) {
  #app {
    padding: 5px;
  }
  #weather-app {
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
