var City = /** @class */ (function () {
    function City(name, country) {
        this.name = name;
        this.country = country;
    }
    City.prototype.getCityInfo = function () {
        return this.displayInfo();
    };
    City.prototype.displayInfo = function () {
        return "".concat(this.name, ", ").concat(this.country);
    };
    return City;
}());
var city = new City("Bend", "United States");
console.log(city.name);
console.log(city.country);
console.log(city.getCityInfo());
