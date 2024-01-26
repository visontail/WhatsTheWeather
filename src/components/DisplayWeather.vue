<template>
  <div id="data-card" v-if="weatherData">
    <div id="weather-main">
      <h2 id="city">{{ weatherData.location.name }}</h2>
      <p v-if="isCelcius" id="temp">{{ weatherData.current.temp_c }}°C</p>
      <p v-else id="temp">{{ weatherData.current.temp_f }}°F</p>
      <p>{{ weatherData.location.hour }}</p>
      <p>{{ weatherData.location.dayOfWeek }}</p>
      <p>{{ weatherData.current.condition.text }}</p>
      <img id="condition-icon" :src="weatherData.current.condition.icon"/>
    </div>
    <div id="weather-details">
      <SearchForm @search="getWeatherData" />
      <button id="toggle-unit" @click="toggleUnit">{{ isCelcius ? '°F' : '°C' }}</button>
      <p>Budapest</p>
      <p>New York</p>
      <p>California</p>
      <p>Canberra</p>
      <p id="sub_heading">Weather Details</p>
      <p>Feels Like:</p>
      <p>{{ isCelcius ? weatherData.current.feelslike_c : weatherData.current.feelslike_f }}°{{ isCelcius ? 'C' : 'F' }}</p>
      <p>Wind:</p>
      <p>{{ isCelcius ? weatherData.current.wind_kph : weatherData.current.wind_mph }} {{ isCelcius ? 'kph' : 'mph' }}</p>
      <p>{{ weatherData.current.wind_dir }}</p>
      <p>Humidity:</p>
      <p>{{ weatherData.current.humidity }}%</p>
    </div>
  </div>
</template>

<script>
import SearchForm from './SearchForm.vue';
export default {
  name: 'DisplayWeather',
  props: {
    weatherData: Object,
  },
  data() {
    return {
      isCelcius: true,
      backgroundOpacity: 0.8,
    };
  },
  methods: {
    toggleUnit() {
      this.isCelcius = !this.isCelcius;
    },
  },
  components: {
    SearchForm,
  },
}
</script>

<style scoped>
#weather-details{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
}

</style>

