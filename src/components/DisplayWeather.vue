<template>
  <div id="weather-container" v-if="weatherData" :style="{ backgroundImage: 'url(' + weatherData.current.backgroundImg + ')' }" >
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
        <div id="white-line"></div>
        <p id="sub_heading">Weather Details</p>
        <table>
          <tbody>
            <tr>
              <th>Feels Like</th>
              <td>{{ isCelcius ? weatherData.current.feelslike_c : weatherData.current.feelslike_f }}°{{ isCelcius ? 'C' : 'F' }}</td>
            </tr>
            <tr>
              <th>Wind</th>
              <td>{{ isCelcius ? weatherData.current.wind_kph : weatherData.current.wind_mph }} {{ isCelcius ? 'km/h' : 'mph' }}</td>
            </tr>
            <tr>
              <th>Wind Direction</th>
              <td>{{ weatherData.current.wind_dir }}</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>{{ weatherData.current.humidity }}%</td>
            </tr>
          </tbody>
        </table>
        <div id="white-line"></div>
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
    padding-left: 10px;
  }

  #weather-details{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.4);
  }

  #collapse{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #white-line {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.4);
    width: 80%;
    margin: 20px 0;
  }
}

#condition-icon{
  width: 50px;
  height: 50px;
}

#toggle-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: #3D3D3D;
  background: #fff;
  border: none;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  touch-action: manipulation;
  width: 40%;
}
#toggle-unit:hover {
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1.5px rgba(77, 75, 75, 0.5);
  outline: 0;
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

