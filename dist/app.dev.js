"use strict";

var _initialize = _interopRequireDefault(require("./src/initialize.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
  var defaultParam = 'warsaw';
  (0, _initialize["default"])(defaultParam);
});