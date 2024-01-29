<template>
  <div id="weather-container" v-if="weatherData">
    <h1 id="title">the.weather</h1>
    <div id="weather-main">
      <div id="temp-container">
        <p v-if="isCelcius" id="temp">{{ weatherData.current.temp_c }}°</p>
        <p v-else id="temp">{{ weatherData.current.temp_f }}°</p>
      </div>
      <div id="info-container">
        <h2 id="city">{{ weatherData.location.name }}</h2>
        <p>{{ weatherData.location.hour }} - {{ weatherData.location.dayOfWeek }}, {{ weatherData.location.date }}</p>
      </div>
      <div id="condition-container">
        <img id="condition-icon" :src="weatherData.current.condition.icon"/>
        <p>{{ weatherData.current.condition.text }}</p>
      </div>
    </div>
    <div id="weather-details">
      <SearchForm @search="getWeatherData" />
      <div id="collapse">
        <button id="toggle-unit" @click="toggleUnit">Switch to {{ isCelcius ? '°F' : '°C' }}</button>
        <p>Budapest</p>
        <p>New York</p>
        <p>California</p>
        <p>Canberra</p>
        <p id="sub_heading">Weather Details</p>
        <table>
          <tbody>
            <tr>
              <th>Feels Like:</th>
              <td>{{ isCelcius ? weatherData.current.feelslike_c : weatherData.current.feelslike_f }}°{{ isCelcius ? 'C' : 'F' }}</td>
            </tr>
            <tr>
              <th>Wind:</th>
              <td>{{ isCelcius ? weatherData.current.wind_kph : weatherData.current.wind_mph }} {{ isCelcius ? 'kph' : 'mph' }}, </td>
              <td>{{ weatherData.current.wind_dir }}</td>
            </tr>
            <tr>
              <th>Humidity:</th>
              <td>{{ weatherData.current.humidity }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from './SearchForm.vue';
import { fetchWeather } from '@/services/weatherService';
import { formatWeatherData } from '@/services/formatData';

export default {
  name: 'DisplayWeather',
  data() {
    return {
      isCelcius: true,
      weatherData: null,
    };
  },
  methods: {
    toggleUnit() {
      this.isCelcius = !this.isCelcius;
    },
    async getWeatherData(city) {
      try {
        const data = await fetchWeather(city);
        this.weatherData = formatWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    // Load default weather for London when the page is loaded
    this.getWeatherData('London');
  },
  components: {
    SearchForm,
  },
}
</script>

<style scoped>
@media screen and (min-width: 800px) {
    #weather-container{
    display: flex;
  }

  #title{
    font-size: 15px;
    position: absolute;
    margin: 40px 0 0 40px ;
  }

  #weather-main{
    flex: 2;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 40px;
  }
  #temp-container,
  #info-container,
  #condition-container {
    display: flex;
    flex-direction: column;
    
  }
  #temp-container #temp{
    font-size: 100px;
    font-weight: bold;
    margin: 10px;
  }
  #condition-container{
    align-items: center;
    padding-left: 10px;
  }

  #weather-details{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.4);
  }
}

#condition-icon{
  width: 40px;
  height: 40px;
}


@media screen and (max-width: 800px) {
  #weather-main {
    flex-direction: column;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #temp-container,
  #info-container,
  #condition-container {
    margin: 5px;
  }

  #temp-container #temp{
    font-size: 100px;
    font-weight: bold;
  }

  #title{
    font-size: 15px;
  }

  /* Hide Weather details */
  #collapse{
    display: none;
  }
  
}

</style>

