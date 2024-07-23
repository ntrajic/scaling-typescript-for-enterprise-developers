"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cities = void 0;
var Cities;
(function (Cities) {
    function formatCity(city) {
        return "".concat(city.name, ", ").concat(city.country);
    }
    Cities.formatCity = formatCity;
})(Cities || (exports.Cities = Cities = {}));
