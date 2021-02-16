"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getElement = _interopRequireDefault(require("./getElement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var displayWeather = function displayWeather(data) {
  console.log('display weather!');

  var _data$main = data.main,
      temp = _data$main.temp,
      feelsLike = _data$main.feels_like,
      min = _data$main.temp_min,
      max = _data$main.temp_max,
      pressure = _data$main.pressure,
      humidity = _data$main.humidity,
      name = data.name,
      country = data.sys.country,
      speed = data.wind.speed,
      _data$weather = _slicedToArray(data.weather, 1),
      _data$weather$ = _data$weather[0],
      description = _data$weather$.description,
      icon = _data$weather$.icon,
      id = _data$weather$.id,
      main = _data$weather$.main;

  temp = Math.round(temp);
  feelsLike = Math.round(feelsLike);
  min = Math.round(min);
  max = Math.round(max);
  console.log(description);
  (0, _getElement["default"])('.span-city').innerHTML = name;
  (0, _getElement["default"])('.span-country').innerHTML = country;
  (0, _getElement["default"])('.temp-wrapper').innerHTML = temp;
  (0, _getElement["default"])('.description').innerHTML = description;
  (0, _getElement["default"])('.feels-like').innerHTML = "Feels like: ".concat(feelsLike, "&deg;C ");
  (0, _getElement["default"])('.min').innerHTML = "<i class=\"fas fa-temperature-low\"></i> min:".concat(min, "&deg;C");
  (0, _getElement["default"])('.max').innerHTML = "<i class=\"fas fa-temperature-high\"></i> max:".concat(max, "&deg;C");
  (0, _getElement["default"])('.humidity').innerHTML = " <i class=\"fas fa-tint\"></i>Humidity: ".concat(humidity, "%");
  (0, _getElement["default"])('.pressure').innerHTML = " <i class=\"fas fa-long-arrow-alt-down\"></i>".concat(pressure, "hPa");
  (0, _getElement["default"])('.wind').innerHTML = "<i class=\"fas fa-wind\"></i>".concat(Math.round(speed * 100) / 100, " m/s");
  (0, _getElement["default"])('.main-img').src = "./images/icons/".concat(icon, ".png");
};

var _default = displayWeather;
exports["default"] = _default;