"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getElement = _interopRequireDefault(require("./getElement.js"));

var _initialize = _interopRequireDefault(require("./initialize.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var searchUtils = function searchUtils() {
  var form = (0, _getElement["default"])('.search-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = document.getElementById('value').value;
    (0, _initialize["default"])(text);
  });
};

var _default = searchUtils;
exports["default"] = _default;