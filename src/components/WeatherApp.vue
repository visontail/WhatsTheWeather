<template>
  <div id="weather-app">
    <h1 id="title">Weather App</h1>
  </div>
</template>

<script>
export default {
  name: 'WeatherApp',
  methods: {
    getWeather() {
      console.log('getWeather()')
    }
  }
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
