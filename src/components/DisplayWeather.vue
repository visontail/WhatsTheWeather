<template>
  <div class="weather-container" v-if="weatherData"
    :style="{ backgroundImage: 'url(' + weatherData.current.backgroundImg + ')' }">
    <h1 class="title">the.weather</h1>
    <div class="weather-main">
      <div class="temp-container">
        <p v-if="isCelcius" class="temp">{{ weatherData.current.temp_c }}°</p>
        <p v-else class="temp">{{ weatherData.current.temp_f }}°</p>
      </div>
      <div class="info-container">
        <p class="city">{{ weatherData.location.name }}</p>
        <p>{{ weatherData.location.hour }} - {{ weatherData.location.dayOfWeek }}, {{ weatherData.location.date }}</p>
      </div>
      <div class="condition-container">
        <img class="condition-icon" :src="weatherData.current.condition.icon" />
        <p>{{ weatherData.current.condition.text }}</p>
      </div>
    </div>
    <div class="weather-details">
      <SearchForm @search="getWeatherData" />
      <div class="collapse">
        <button class="toggle-unit" @click="toggleUnit">Switch to {{ isCelcius ? '°F' : '°C' }}</button>
        <button class="suggest-btn" @click="getWeatherData('Budapest')">Budapest</button>
        <button class="suggest-btn" @click="getWeatherData('New York')">New York</button>
        <button class="suggest-btn" @click="getWeatherData('California')">California</button>
        <button class="suggest-btn" @click="getWeatherData('Canberra')">Canberra</button>
        <div class="white-line"></div>
        <p class="sub_heading">Weather Details</p>
        <table>
          <tbody>
            <tr>
              <th>Feels Like</th>
              <td>{{ isCelcius ? weatherData.current.feelslike_c : weatherData.current.feelslike_f }}°{{ isCelcius ? 'C' :
                'F' }}</td>
            </tr>
            <tr>
              <th>Wind</th>
              <td>{{ isCelcius ? weatherData.current.wind_kph : weatherData.current.wind_mph }} {{ isCelcius ? 'km/h' :
                'mph' }}</td>
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
        <div class="white-line"></div>
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
.weather-main {
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 40px;
}

.temp-container,
.info-container,
.condition-container {
  display: flex;
  flex-direction: column;
}

.temp-container .temp {
  font-size: 100px;
  font-weight: bold;
  margin: 10px;
}

.info-container,
.condition-container {
  margin-bottom: 20px;
}

.info-container .city {
  font-size: 50px;
  margin: 0;
}

.info-container p {
  font-size: 14px;
  margin: 0;
}

.condition-container {
  padding-left: 10px;
  font-size: 12px;
}
.condition-container p {
  margin: 0;
}
.condition-icon {
  width: 50px;
  height: 50px;
}

.toggle-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  margin-bottom: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: #3D3D3D;
  background: #fff;
  border: none;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  touch-action: manipulation;
  width: 40%;
}
.toggle-unit:hover {
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1.5px rgba(77, 75, 75, 0.5);
  outline: 0;
}

.weather-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 15px;
  position: absolute;
  margin: 40px 0 0 40px;
}

.collapse {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 60px;
}

.suggest-btn {
  margin: 10px 0;
  border: 0;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.0);
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  text-align: left;
  width: 35%;
}

.suggest-btn:hover {
  outline: 0;
  color: white;
  transition: background-size 0.2s ease-in-out;
}

.white-line {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.4);
  width: 80%;
  margin: 20px 0;
}

.sub_heading {
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  margin: 15px 0 25px 0;
}

table {
  width: 80%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: 5px;
  font-size: 16px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.6);
}

td {
  text-align: right;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  color: white;
}

@media screen and (max-width: 465px),
screen and (max-width: 800px){
  .weather-main {
    flex-direction: column;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .toggle-unit {
    width: 30%;
    max-width: 150px;
  }
}

@media screen and (min-width: 800px) {
  .weather-container {
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .weather-details {
    background-color: rgba(255, 255, 255, 0.4);
  }
}
@media screen and (max-width: 800px) {
  .weather-main {
    padding-top: 60px;
  }
}

@media screen and (max-width: 500px) {
  .weather-main {
    padding-top: 60px;
  }

  .temp-container .temp {
    font-size: 50px;
    font-weight: bold;
    margin: 10px;
  }

  .info-container,
  .condition-container {
    margin-bottom: 20px;
  }

  .info-container .city {
    font-size: 20px;
    margin: 0;
  }
  .info-container p {
    font-size: 10px;
    margin: 0;
  }

  .condition-container {
  padding-left: 10px;
  font-size: 10px;
  }
  .condition-icon {
  width: 35px;
  height: 35px;
  }

}

</style>