<template>
  <div id="weather-container" v-if="weatherData">
    <div id="weather-main">
      <h1 id="title">the.weather</h1>
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
#weather-container{
  display: flex;
}
#weather-main{
  flex: 2;
  display: flex;
  flex-direction: column;
}
#weather-details{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
}

</style>

