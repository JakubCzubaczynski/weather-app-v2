"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getData = function getData(url) {
  var data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('getdata!');
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url)["catch"](function (err) {
            return console.log(err);
          }));

        case 3:
          data = _context.sent;

          if (!data) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", data.json());

        case 6:
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = getData;
exports["default"] = _default;