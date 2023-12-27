/**
 * Selecting the correct backgorund image for the given condition for display.
 * @param {*} condition - The condition to get the icon for.
 */
function getConditionImage(condition) {
  const conditionImages = {
    'Sunny': require("@/assets/imgs/clear.jpg"),
    'Clear': require("@/assets/imgs/clear.jpg"),
    'Partly cloudy': require("@/assets/imgs/partly-cloudy.jpg"),
    'Cloudy': require("@/assets/imgs/cloudy.jpg"),
    'Overcast': require("@/assets/imgs/overcast.jpg"),
    'Mist': require("@/assets/imgs/fog.jpg"),
    'Patchy rain possible': require("@/assets/imgs/rain.jpg"),
    'Patchy snow possible': require("@/assets/imgs/snow.jpg"),
    'Patchy sleet possible': require("@/assets/imgs/snow.jpg"),
    'Patchy freezing drizzle possible': require("@/assets/imgs/snow.jpg"),
    'Thundery outbreaks possible': require("@/assets/imgs/storm.jpg"),
    'Blowing snow': require("@/assets/imgs/snow.jpg"),
    'Blizzard': require("@/assets/imgs/snow.jpg"),
    'Fog': require("@/assets/imgs/fog.jpg"),
    'Freezing fog': require("@/assets/imgs/fog.jpg"),
    'Patchy light drizzle': require("@/assets/imgs/rain.jpg"),
    'Light drizzle': require("@/assets/imgs/rain.jpg"),
    'Freezing drizzle': require("@/assets/imgs/rain.jpg"),
    'Heavy freezing drizzle': require("@/assets/imgs/rain.jpg"),
    'Patchy light rain': require("@/assets/imgs/rain.jpg"),
    'Light rain': require("@/assets/imgs/rain.jpg"),
    'Moderate rain at times': require("@/assets/imgs/rain.jpg"),
    'Moderate rain': require("@/assets/imgs/rain.jpg"),
    'Heavy rain at times': require("@/assets/imgs/rain.jpg"),
    'Heavy rain': require("@/assets/imgs/rain.jpg"),
    'Light freezing rain': require("@/assets/imgs/rain.jpg"),
    'Moderate or heavy freezing rain': require("@/assets/imgs/rain.jpg"),
    'Light sleet': require("@/assets/imgs/snow.jpg"),
    'Moderate or heavy sleet': require("@/assets/imgs/snow.jpg"),
    'Patchy light snow': require("@/assets/imgs/snow.jpg"),
    'Light snow': require("@/assets/imgs/snow.jpg"),
    'Patchy moderate snow': require("@/assets/imgs/snow.jpg"),
    'Moderate snow': require("@/assets/imgs/snow.jpg"),
    'Patchy heavy snow': require("@/assets/imgs/snow.jpg"),
    'Heavy snow': require("@/assets/imgs/snow.jpg"),
    'Ice pellets': require("@/assets/imgs/snow.jpg"),
    'Light rain shower': require("@/assets/imgs/rain.jpg"),
    'Moderate or heavy rain shower': require("@/assets/imgs/rain.jpg"),
    'Torrential rain shower': require("@/assets/imgs/rain.jpg"),
    'Light sleet showers': require("@/assets/imgs/snow.jpg"),
    'Moderate or heavy sleet showers': require("@/assets/imgs/snow.jpg"),
    'Light snow showers': require("@/assets/imgs/snow.jpg"),
    'Moderate or heavy snow showers': require("@/assets/imgs/snow.jpg"),
    'Light showers of ice pellets': require("@/assets/imgs/snow.jpg"),
    'Moderate or heavy showers of ice pellets': require("@/assets/imgs/snow.jpg"),
    'Patchy light rain with thunder': require("@/assets/imgs/rain.jpg"),
    'Moderate or heavy rain with thunder': require("@/assets/imgs/rain.jpg"),
    'Patchy light snow with thunder': require("@/assets/imgs/snow.jpg"),
    'Moderate or heavy snow with thunder': require("@/assets/imgs/snow.jpg"),
  };
  return conditionImages[condition];

}

/**
 * Selecting the correct icon for the given condition for display.
 * @param {*} condition - The condition to get the icon for.
 */
function getConditionIcon(condition) {
  const conditionIcons = {
    "Sunny": require("@/assets/icons/sunny.png"),
    "Partly cloudy": require("@/assets/icons/partly-cloudy.png"),
    "Cloudy": require("@/assets/icons/cloudy.png"),
    "Overcast": require("@/assets/icons/overcast.png"),
    "Mist": require("@/assets/icons/fog.png"),
    "Patchy rain possible": require("@/assets/icons/rain.png"),
    "Patchy snow possible": require("@/assets/icons/snow.png"),
    "Patchy sleet possible": require("@/assets/icons/snow.png"),
    "Patchy freezing drizzle possible": require("@/assets/icons/snow.png"),
    "Thundery outbreaks possible": require("@/assets/icons/storm.png"),
    "Blowing snow": require("@/assets/icons/snow.png"),
    "Blizzard": require("@/assets/icons/snow.png"),
    "Fog": require("@/assets/icons/fog.png"),
    "Freezing fog": require("@/assets/icons/fog.png"),
    "Patchy light drizzle": require("@/assets/icons/rain.png"),
    "Light drizzle": require("@/assets/icons/rain.png"),
    "Freezing drizzle": require("@/assets/icons/rain.png"),
    "Heavy freezing drizzle": require("@/assets/icons/rain.png"),
    "Patchy light rain": require("@/assets/icons/rain.png"),
    "Light rain": require("@/assets/icons/rain.png"),
    "Moderate rain at times": require("@/assets/icons/rain.png"),
    "Moderate rain": require("@/assets/icons/rain.png"),
    "Heavy rain at times": require("@/assets/icons/rain.png"),
    "Heavy rain": require("@/assets/icons/rain.png"),
    "Light freezing rain": require("@/assets/icons/rain.png"),
    "Moderate or heavy freezing rain": require("@/assets/icons/rain.png"),
    "Light sleet": require("@/assets/icons/snow.png"),
    "Moderate or heavy sleet": require("@/assets/icons/snow.png"),
    "Patchy light snow": require("@/assets/icons/snow.png"),
    "Light snow": require("@/assets/icons/snow.png"),
    "Patchy moderate snow": require("@/assets/icons/snow.png"),
    "Moderate snow": require("@/assets/icons/snow.png"),
    "Patchy heavy snow": require("@/assets/icons/snow.png"),
    "Heavy snow": require("@/assets/icons/snow.png"),
    "Ice pellets": require("@/assets/icons/snow.png"),
    "Light rain shower": require("@/assets/icons/rain.png"),
    "Moderate or heavy rain shower": require("@/assets/icons/rain.png"),
    "Torrential rain shower": require("@/assets/icons/rain.png"),
    "Light sleet showers": require("@/assets/icons/snow.png"),
    "Moderate or heavy sleet showers": require("@/assets/icons/snow.png"),
    "Light snow showers": require("@/assets/icons/snow.png"),
    "Moderate or heavy snow showers": require("@/assets/icons/snow.png"),
    "Light showers of ice pellets": require("@/assets/icons/snow.png"),
    "Moderate or heavy showers of ice pellets": require("@/assets/icons/snow.png"),
    "Patchy light rain with thunder": require("@/assets/icons/rain.png"),
    "Moderate or heavy rain with thunder": require("@/assets/icons/rain.png"),
    "Patchy light snow with thunder": require("@/assets/icons/snow.png"),
    "Moderate or heavy snow with thunder": require("@/assets/icons/snow.png"),
  };
  return conditionIcons[condition];
}

/**
 * Get the correct welcome text for the given time.
 * @param {*} localtime - The localtime from the weather api response.
 */
function getWelcomText(localtime) {
  const date = new Date(localtime);
  const time = date.getHours();
  if (4 < time && time < 12) {
    return "Good Morning";
  } else if (12 < time && time < 18) {
    return "Good Afternoon";
  } else {
    return "Good Night";
  }
}

/**
 * Get hours and minutes from localtime.
 * @param {*} localtime - The localtime from the weather api response.
 */
function getFormattedTime(localtime) {
  const date = new Date(localtime);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // Format as "HH:mm"
  return `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

/**
 * Get the day of the week from localtime.
 * @param {*} localtime - The localtime from the weather api response.
 */
function getDayOfWeek(localtime) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(localtime);
  // Get the day of the week (0-6), and use it to index into the array
  return daysOfWeek[date.getDay()];
}

/**
 * Formats weather data for display.
 */
function formatWeatherData(data) {
  const conditionIcons = getConditionIcon(data.current.condition.text);
  console.log(data.current.condition.text);
  const conditionImages = getConditionImage(data.current.condition.text);
  const welcomeText = getWelcomText(data.location.localtime);
  const formattedTime = getFormattedTime(data.location.localtime);
  const dayOfWeek = getDayOfWeek(data.location.localtime);

  const formattedData = {
    location: {
      name: data.location.name,
      country: data.location.country,
      region: data.location.region,
      localtime: data.location.localtime,
      hour: formattedTime,
      dayOfWeek: dayOfWeek,
      welcomeText: welcomeText,
      lat: data.location.lat,
      lon: data.location.lon,
    },
    current: {
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      wind_kph: data.current.wind_kph,
      wind_mph: data.current.wind_mph,
      wind_dir: data.current.wind_dir,
      humidity: data.current.humidity,
      condition: {
        text: data.current.condition.text,
        icon: conditionIcons,
        background_img: conditionImages,
      },
    },
  };
  return formattedData;
}
module.exports = { formatWeatherData };
