<template>
  <div id="data-card" v-if="weatherData">
    <div id="weather-main" :style="{ backgroundImage: `url('${weatherData.current.backgroundImg}')`, opacity: backgroundOpacity}">
      <h2 id="city">{{ weatherData.location.name }}</h2>
      <p v-if="isCelcius" id="temp">{{ weatherData.current.temp_c }}°C</p>
      <p v-else id="temp">{{ weatherData.current.temp_f }}°F</p>
      <p>{{ weatherData.location.hour }}</p>
      <p>{{ weatherData.location.dayOfWeek }}</p>
      <p>{{ weatherData.current.condition.text }}</p>
      <img id="condition-icon" :src="weatherData.current.condition.icon"/>
    </div>
    <div id="weather-details" class="weather-details">
      <button id="toggle-unit" @click="toggleUnit">{{ isCelcius ? '°F' : '°C' }}</button>
      <h2>{{ weatherData.location.name }}, {{ weatherData.location.country }}</h2>
      <p>{{ weatherData.location.region }}</p>
      <p><img class="detail-icons" src="@/assets/pin.png">{{ weatherData.location.lat }}, {{ weatherData.location.lon }}</p>
      <p><img class="detail-icons" src="@/assets/feels-like.png">{{ isCelcius ? weatherData.current.feelslike_c : weatherData.current.feelslike_f }}°{{ isCelcius ? 'C' : 'F' }}</p>
      <p><img class="detail-icons" src="@/assets/wind.png">{{ isCelcius ? weatherData.current.wind_kph : weatherData.current.wind_mph }} {{ isCelcius ? 'kph' : 'mph' }} ({{ weatherData.current.wind_dir }})</p>
      <p><img class="detail-icons" src="@/assets/humidity.png">{{ weatherData.current.humidity }}%</p>
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
      backgroundOpacity: 0.8,
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
  border-radius: 8px;
  padding: 1rem;
  display: flex;
}

#weather-main,
#weather-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: #F0ECE5;
  padding: 1rem;
}

#weather-main {
  margin: 30px 0px;
  width: 65vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 28px;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.75);


}

#temp {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 0;
}

#weather-details {
  width: 35vw;
  position: relative
}

#toggle-unit {
  background-color: #F0ECE5;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}

</style>

