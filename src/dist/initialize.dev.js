"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("./getData.js"));

var _displayWeather = _interopRequireDefault(require("./displayWeather.js"));

var _displayForecast = _interopRequireDefault(require("./displayForecast.js"));

var _searchUtils = _interopRequireDefault(require("./searchUtils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialize = function initialize(city) {
  var key, weather, forecast, weatherData, forecastData;
  return regeneratorRuntime.async(function initialize$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          key = "e520e248b2ce5d233b45cf74840ed29c";
          console.log(city);
          weather = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(key, "&units=metric");
          forecast = "https://api.openweathermap.org/data/2.5/forecast?q=".concat(city, "&appid=").concat(key, "&units=metric");
          _context.next = 6;
          return regeneratorRuntime.awrap((0, _getData["default"])(weather));

        case 6:
          weatherData = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap((0, _getData["default"])(forecast));

        case 9:
          forecastData = _context.sent;

          if (!(weatherData.cod === "404" || forecastData.cod === "404")) {
            _context.next = 15;
            break;
          }

          alert('City not found!');
          throw new Error('City not found');

        case 15:
          console.log(weatherData);
          console.log(forecastData);
          (0, _displayWeather["default"])(weatherData);
          (0, _displayForecast["default"])(forecastData);
          (0, _searchUtils["default"])();

        case 20:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = initialize;
exports["default"] = _default;