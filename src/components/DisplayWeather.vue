<template>
  <div id="data-card" v-if="weatherData">
    <div id="weather-main" class="temperature" :style="{ backgroundImage: `url('${weatherData.current.condition.background_img}')` }">
      <h2>{{ weatherData.location.name }}, {{ weatherData.location.country }}</h2>
      <p>{{ weatherData.location.region }}</p>
      <p v-if="isCelcius" id="temp">{{ weatherData.current.temp_c }}°C</p>
      <p v-else id="temp">{{ weatherData.current.temp_f }}°F</p>
      <p>{{ weatherData.location.hour }}</p>
      <p>{{ weatherData.location.dayOfWeek }}</p>
      <p>{{ weatherData.location.welcomeText }}</p>
      <p>{{ weatherData.current.condition.text }}</p>
      <img id="condition-icon" :src="weatherData.current.condition.icon"/>
    </div>
    <div id="weather-details" class="weather-details">
      <button id="toggle-unit" @click="toggleUnit">{{ isCelcius ? '°F' : '°C' }}</button>
      <h2>{{ weatherData.location.name }}</h2>
      <p>{{ weatherData.location.localtime }}</p>
      <p>{{ weatherData.location.country }}</p>
      <p>{{ weatherData.location.region }}</p>
      <p>Coordinates: {{ weatherData.location.lat }}, {{ weatherData.location.lon }}</p>
      <p>Feels Like: {{ isCelcius ? weatherData.current.feelslike_c : weatherData.current.feelslike_f }}°{{ isCelcius ? 'C' : 'F' }}</p>
      <p>Wind: {{ isCelcius ? weatherData.current.wind_kph : weatherData.current.wind_mph }} {{ isCelcius ? 'kph' : 'mph' }}</p>
      <p>Wind Direction: {{ weatherData.current.wind_dir }}</p>
      <p>Humidity: {{ weatherData.current.humidity }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayWeather',
  props: {
    weatherData: Object,
  },
  data() {
    return {
      isCelcius: true,
    };
  },
  methods: {
    toggleUnit() {
      this.isCelcius = !this.isCelcius;
    },
  }
}
</script>

<style scoped>
#data-card {
  background-color: #161A30;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#weather-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding-bottom: 8rem;
  color: #F0ECE5;
}

#temp {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 0;
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
</style>

