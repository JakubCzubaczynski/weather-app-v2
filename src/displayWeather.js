import getElement from './getElement.js';
const displayWeather = (data) => {
console.log('display weather!');
    let {
        main: {
            temp,
            feels_like: feelsLike,
            temp_min: min,
            temp_max: max,
            pressure,
            humidity
        },
        name,
        sys: {
            country
        },
        wind: {
            speed
        },
        weather: [{
            description,
            icon,
            id,
            main
        }]
    } = data;
   
    temp = Math.round(temp);
    feelsLike = Math.round(feelsLike);
    min = Math.round(min);
    max = Math.round(max);
console.log(description);
    getElement('.span-city').innerHTML = name;
    getElement('.span-country').innerHTML = country;
    getElement('.temp-wrapper').innerHTML = temp;
    getElement('.description').innerHTML = description;
    getElement('.feels-like').innerHTML = `Feels like: ${feelsLike}&deg;C `;
    getElement('.min').innerHTML = `<i class="fas fa-temperature-low"></i> min:${min}&deg;C`;
    getElement('.max').innerHTML = `<i class="fas fa-temperature-high"></i> max:${max}&deg;C`;
    getElement('.humidity').innerHTML = ` <i class="fas fa-tint"></i>Humidity: ${humidity}%`;
    getElement('.pressure').innerHTML = ` <i class="fas fa-long-arrow-alt-down"></i>${pressure}hPa`;
    getElement('.wind').innerHTML = `<i class="fas fa-wind"></i>${Math.round(speed * 100) / 100} m/s`;
    getElement('.main-img').src = `./images/icons/${icon}.png`;


}

export default displayWeather;