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
      <SearchForm id="search-form" @search="getWeatherData" />
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
              <td>Feels Like:</td>
              <td>{{ isCelcius ? weatherData.current.feelslike_c : weatherData.current.feelslike_f }}°{{ isCelcius ? 'C' : 'F' }}</td>
            </tr>
            <tr>
              <td>Wind:</td>
              <td>{{ isCelcius ? weatherData.current.wind_kph : weatherData.current.wind_mph }} {{ isCelcius ? 'kph' : 'mph' }}</td>
              <td>{{ weatherData.current.wind_dir }}</td>
            </tr>
            <tr>
              <td>Humidity:</td>
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
@media screen and (min-width: 900px) {
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

  #weather-details{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
  }
}

#condition-icon{
  width: 40px;
  height: 40px;
}


@media screen and (max-width: 900px) {
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

