import getData from './getData.js';
import displayWeather from './displayWeather.js';
import displayForecast from './displayForecast.js';
import searchUtils from './searchUtils.js';

const initialize = async (city) => {
    const key = "e520e248b2ce5d233b45cf74840ed29c";
    console.log(city);
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;

    const weatherData = await getData(weather);
    const forecastData = await getData(forecast);
    if (weatherData.cod === "404" || forecastData.cod === "404") {
        alert('City not found!');
       throw new Error('City not found');
       
        
    } else {
        console.log(weatherData);
        console.log(forecastData);


        displayWeather(weatherData);
        displayForecast(forecastData);
        searchUtils();
    }

}

export default initialize;