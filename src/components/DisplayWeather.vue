<template>
  <div id="data-card">
    <div v-if="weatherData">
      <div class="temperature">
        <h2>{{ weatherData.location[0].name }}</h2>
        <p>{{ weatherData.location[0].country }}</p>
        <p>{{ weatherData.location[0].region }}</p>
        <p>{{ weatherData.location[0].localtime }}</p>
        <p class="temp">{{ weatherData.weather[0].tempC }}°C / {{ weatherData.weather[0].tempF }}°F</p>
      </div>
      <div class="separator"></div>
      <div class="weather-details">
        <p>Condition: {{ weatherData.weather[0].condition }}</p>
        <p>Feels Like: {{ weatherData.weather[0].feelsLikeC }}°C / {{ weatherData.weather[0].feelsLikeF }}°F</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayWeather',
  props: {
    weatherData: Object,
  },
  methods: {

  },
}
</script>

<style scoped>
#weather-app {
  background-color: #161A30;
}
#title {
  font-size: 3rem;
  font-weight: 300;
  margin: 0;
  padding: 1rem;
  text-align: center;
}
#data-card {
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.temperature {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.temp-image {
  margin-top: 1rem;
}
.temp {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
}
.separator {
  width: 100%;
  height: 2px;
  background-color: #000000;
  margin: 1rem 0;
}
.weather-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

