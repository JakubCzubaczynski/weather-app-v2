"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeActive = exports.addActive = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var addActive = function addActive(element) {
  element.classList.add('active');
};

exports.addActive = addActive;

var removeActive = function removeActive() {
  _toConsumableArray(document.querySelectorAll('[data-name]')).map(function (item) {
    item.classList.remove('active');
  });
};

exports.removeActive = removeActive;