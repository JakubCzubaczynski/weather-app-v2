import getElement from './getElement.js';
import { addActive, removeActive } from './utils.js';
import displayForecastDetails from './displayForecastDetails.js';
const displayForecast = (data) => {
  console.log('display forecast!');
  let dayName = [];
  const response = data.list.map((item) => {
    const date = item.dt_txt;
    const newDate = new Date(date);

    const weekday = newDate.getDay();
    const hours = newDate.getHours();
    const day = newDate.getDate();
    const month = newDate.getMonth();
    switch (weekday) {
      case 0:
        item.day = 'Sunday';
        break;
      case 1:
        item.day = 'Monday';
        break;
      case 2:
        item.day = 'Tuesday';
        break;
      case 3:
        item.day = 'Wednesday';
        break;
      case 4:
        item.day = 'Thursday';
        break;
      case 5:
        item.day = 'Friday';
        break;
      case 6:
        item.day = 'Saturday';
        break;
    }
    item.hour = hours;

    return item;
  });

  const uniqueDays = [
    ...new Set(
      response.map((item) => {
        return item.day;
      })
    ),
  ];

  //temporary function - creating blank object - min-max temp day by day;
  const temp = uniqueDays.map((item) => {
    return {
      name: item,
      min: 0,
      max: 0,
      icon: null,
    };
  });

  //Filling object with data
  const daysMinMax = temp.map((item) => {
    let i = 0;
    let j = 0;
    data.list.filter((data) => {
      if (data.day === item.name && i == 0) {
        item.icon = data.weather[0].icon;
        item.min = data.main.temp_min;
        item.max = data.main.temp_max;
        i++;
      } else if (data.day === item.name && i > 0) {
        j++;
        if (item.min > data.main.temp_min) item.min = data.main.temp_min;
        if (item.max < data.main.temp_max) item.max = data.main.temp_max;
        if (j > 3 && j < 6) {
          item.icon = data.weather[0].icon;
          console.log(item.icon);
        }
      }

      return data;
    });

    return item;
  });

  const weekdayLabel = getElement('.weekday-label');
  weekdayLabel.innerHTML = '';
  daysMinMax.map((item) => {
    getElement('.weekday-label').innerHTML += `
        <div class="col-2 weekday-wrapper py-3" data-name="${item.name}">
            <p>${item.name}</p>
            <img src="./images/icons/${item.icon}.png" class="label-img" alt="">
            <p>${Math.round(item.max)}&deg;C</p>
            <p>${Math.round(item.min)}&deg;C</p>
        </div>`;
  });
  console.log(data);

  const daysLabel = [...document.querySelectorAll('[data-name]')];
  daysLabel.map((item, index) => {
    if (index === 0) {
      const day = getElement(
        '.weekday-label'
      ).firstChild.nextElementSibling.getAttribute('data-name');
      displayForecastDetails(day, response);
      addActive(item);
    }
    item.addEventListener('click', () => {
      const day = item.getAttribute('data-name');
      removeActive();
      addActive(item);

      displayForecastDetails(day, response);
    });
  });
};

export default displayForecast;
