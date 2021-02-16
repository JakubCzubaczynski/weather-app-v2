import getElement from './getElement.js';
const displayForecastDetails = (day,data) =>{
    const wrapper = getElement('.forecast-details')
    wrapper.innerHTML ='';

    data.filter(item=>{
       
        if(item.day === day){
            wrapper.innerHTML+=`
            <div class=" forecast-item">
                    <p class="forecast-hour">${item.hour}:00</p>
                    <img src="./images/icons/${item.weather[0].icon}.png" alt="" class="forecast-img">
                    <p class="forecast-temp">${Math.round(item.main.temp)}&deg;C</p>
                    <p class="forecast-wind">${Math.round(item.wind.speed * 10) / 10} m/s</p>
                </div>
            `;
        }
    })
    
}

export default displayForecastDetails;