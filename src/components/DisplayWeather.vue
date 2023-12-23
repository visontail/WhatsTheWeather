<template>
  <div id="data-card" v-if="weatherData">
    <div id="weather-location" class="temperature">
      <h2>{{ weatherData.location[0].name }}</h2>
      <p>{{ weatherData.location[0].country }}</p>
      <p>{{ weatherData.location[0].region }}</p>
      <p>{{ weatherData.location[0].localtime }}</p>
      <p class="temp">{{ weatherData.weather[0].tempC }}°C / {{ weatherData.weather[0].tempF }}°F</p>
    </div>
    <div id="seperator-1"></div>
    <div id="seperator-2"></div>
    <div id="seperator-3"></div>
    <div id="weather-details" class="weather-details">
      <p>Condition: {{ weatherData.weather[0].condition }}</p>
      <p>Feels Like: {{ weatherData.weather[0].feelsLikeC }}°C / {{ weatherData.weather[0].feelsLikeF }}°F</p>
      <p>Wind: {{ weatherData.weather[0].windKph }} kph / {{ weatherData.weather[0].windMph }} mph</p>
      <p>Wind Direction: {{ weatherData.weather[0].windDir }}</p>
      <p>Humidity: {{ weatherData.weather[0].humidity }}%</p>
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
  background-color: #161A30;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#seperator-1 {
  width: 100%;
  background: url('../assets/wave-1.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 10rem;
  position: relative;
  z-index: 2;
  margin-top: -10rem;
}
#seperator-2 {
  width: 100%;
  background: url('../assets/wave-2.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 10rem;
  position: relative;
  z-index: 1;
  margin-top: -10rem;
  opacity: 0.5;
}
#seperator-3 {
  width: 100%;
  background: url('../assets/wave-3.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 10rem;
  position: relative;
  z-index: 3;
  margin-top: -10rem;
  opacity: 0.5;
}

#weather-location {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F0ECE5;
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding-bottom: 6rem;
}

#weather-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #B6BBC4;
  height: 100%;
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  padding: 0.5rem 0;
}

.temp-image {
  margin-top: 1rem;
}

.temp {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
}

</style>

