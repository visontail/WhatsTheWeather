<template>
  <div id="data-card" v-if="weatherData">
    <div id="weather-main" class="temperature">
      <h2>{{ weatherData.location.name }}, {{ weatherData.location.country }}</h2>
      <p>{{ weatherData.location.region }}</p>
      <p id="temp">{{ weatherData.current.temp_c }}°C</p>
      <p id="temp">{{ weatherData.current.temp_f }}°F</p>
      <p>{{ getDayOfWeek(weatherData.location.localtime) }}</p>
      <p>{{ getFormattedTime(weatherData.location.localtime) }}</p>
      <p>{{ getTextAbove(weatherData.location.localtime) }}</p>
      <p>Condition: {{ weatherData.current.condition.text }}</p>
    </div>
    <div id="seperator-1"></div>
    <div id="seperator-2"></div>
    <div id="seperator-3"></div>
    <div id="weather-details" class="weather-details">
      <h2>{{ weatherData.location.name }}</h2>
      <p>{{ weatherData.location.localtime }}</p>
      <p>{{ weatherData.location.country }}</p>
      <p>{{ weatherData.location.region }}</p>
      <p>Coordinates: {{ weatherData.location.lat }}, {{ weatherData.location.lon }}</p>
      <p>Feels Like: {{ weatherData.current.feelslike_c }}°C / {{ weatherData.current.feelslike_f }}°F</p>
      <p>Wind: {{ weatherData.current.wind_kph }} kph / {{ weatherData.current.wind_mph }} mph</p>
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
  methods: {
    getConditionIcon(condition) {
      const conditionIcons = {
        'Clear': '../assets/clear.png',
        'Partly cloudy': '../assets/partly-cloudy.png',
        'Cloudy': '../assets/cloudy.png',
        'Overcast': require('@/assets/icons/overcast.png'),
        'Mist': '../assets/mist.png',
        'Patchy rain possible': '../assets/patchy-rain.png',
        // Add more condition mappings as needed
      };
      console.log(conditionIcons[condition]);
      return conditionIcons[condition];
    },
    getTextAbove(localtime) {
      const date = new Date(localtime);
      const time = date.getHours();
      const test = date.getTime();
      console.log(test);
      if (time > 4 && time < 12) {
        return "Good Morning";
      } else if (time > 12 && time < 18) {
        return "Good Afternoon";
      } else {
        return "Good Night";
      }
    },
    getFormattedTime(localtime){
      const date = new Date(localtime);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      // Format as "HH:mm"
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    },
    getDayOfWeek(localtime) {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const date = new Date(localtime);
      // Get the day of the week (0-6), and use it to index into the array
      return daysOfWeek[date.getDay()];
    },

  },
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
  background-image: url('../assets/imgs/overcast.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding-bottom: 8rem;
}

#temp {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 0;
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
  opacity: 0.8;
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

