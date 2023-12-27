/**
 * Selecting the correct icon for the given condition for display.
 * @param {*} condition - The condition to get the icon for.
 */
function getConditionIcon(condition) {
    const conditionIcons = {
        'Clear': '../assets/clear.png',
        'Partly cloudy': require('@/assets/icons/overcast.png'),
        'Cloudy': '../assets/cloudy.png',
        'Overcast': require('@/assets/icons/overcast.png'),
        'Mist': '../assets/mist.png',
        'Patchy rain possible': '../assets/patchy-rain.png',
        // Add more condition mappings as needed
      };
      console.log(conditionIcons[condition]);
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
function getFormattedTime(localtime){
    const date = new Date(localtime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // Format as "HH:mm"
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

/**
 * Get the day of the week from localtime.
 * @param {*} localtime - The localtime from the weather api response.
 */
function getDayOfWeek(localtime) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(localtime);
    // Get the day of the week (0-6), and use it to index into the array
    return daysOfWeek[date.getDay()];
}

/**
 * Formats weather data for display.
 */
function formatWeatherData(data) {
    const conditionIcons = getConditionIcon(data.current.condition.text);
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
            },
        },
    };
    return formattedData;
}
module.exports = { formatWeatherData };