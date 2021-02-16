"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getElement = _interopRequireDefault(require("./getElement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var displayForecastDetails = function displayForecastDetails(day, data) {
  var wrapper = (0, _getElement["default"])('.forecast-details');
  wrapper.innerHTML = '';
  data.filter(function (item) {
    if (item.day === day) {
      wrapper.innerHTML += "\n            <div class=\" forecast-item\">\n                    <p class=\"forecast-hour\">".concat(item.hour, ":00</p>\n                    <img src=\"./images/icons/").concat(item.weather[0].icon, ".png\" alt=\"\" class=\"forecast-img\">\n                    <p class=\"forecast-temp\">").concat(Math.round(item.main.temp), "&deg;C</p>\n                    <p class=\"forecast-wind\">").concat(Math.round(item.wind.speed * 10) / 10, " m/s</p>\n                </div>\n            ");
    }
  });
};

var _default = displayForecastDetails;
exports["default"] = _default;