"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getElement = _interopRequireDefault(require("./getElement.js"));

var _utils = require("./utils.js");

var _displayForecastDetails = _interopRequireDefault(require("./displayForecastDetails.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var displayForecast = function displayForecast(data) {
  console.log('display forecast!');
  var dayName = [];
  var response = data.list.map(function (item) {
    var date = item.dt_txt;
    var newDate = new Date(date);
    var weekday = newDate.getDay();
    var hours = newDate.getHours();
    var day = newDate.getDate();
    var month = newDate.getMonth();

    switch (weekday) {
      case 0:
        item.day = "Sunday";
        break;

      case 1:
        item.day = "Monday";
        break;

      case 2:
        item.day = "Tuesday";
        break;

      case 3:
        item.day = "Wednesday";
        break;

      case 4:
        item.day = "Thursday";
        break;

      case 5:
        item.day = "Friday";
        break;

      case 6:
        item.day = "Saturday";
        break;
    }

    item.hour = hours;
    return item;
  });

  var uniqueDays = _toConsumableArray(new Set(response.map(function (item) {
    return item.day;
  }))); //temporary function - creating blank object - min-max temp day by day;


  var temp = uniqueDays.map(function (item) {
    return {
      name: item,
      min: 0,
      max: 0,
      icon: null
    };
  }); //Filling object with data

  var daysMinMax = temp.map(function (item) {
    var i = 0;
    var j = 0;
    data.list.filter(function (data) {
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
  var weekdayLabel = (0, _getElement["default"])('.weekday-label');
  weekdayLabel.innerHTML = '';
  daysMinMax.map(function (item) {
    (0, _getElement["default"])('.weekday-label').innerHTML += "\n        <div class=\"col-2 weekday-wrapper py-3\" data-name=\"".concat(item.name, "\">\n            <p>").concat(item.name.substring(0, 3), "</p>\n            <img src=\"./images/icons/").concat(item.icon, ".png\" class=\"label-img\" alt=\"\">\n            <p>").concat(Math.round(item.max), "&deg;C</p>\n            <p>").concat(Math.round(item.min), "&deg;C</p>\n        </div>");
  });
  console.log(data.list);

  var daysLabel = _toConsumableArray(document.querySelectorAll('[data-name]'));

  daysLabel.map(function (item, index) {
    if (index === 0) {
      var day = (0, _getElement["default"])('.weekday-label').firstChild.nextElementSibling.getAttribute('data-name');
      (0, _displayForecastDetails["default"])(day, response);
      (0, _utils.addActive)(item);
    }

    item.addEventListener('click', function () {
      var day = item.getAttribute('data-name');
      (0, _utils.removeActive)();
      (0, _utils.addActive)(item);
      (0, _displayForecastDetails["default"])(day, response);
    });
  });
};

var _default = displayForecast;
exports["default"] = _default;