console.log("We're ready!");
var City = /** @class */ (function () {
    function City(name, country) {
        this.name = name;
        this.country = country;
    }
    City.prototype.getCityInfo = function () {
        return this.displayInfo();
    };
    City.prototype.displayInfo = function () {
        return "$(this.name), $(this.country)";
    };
    return City;
}());
var berlin = new City("Berlin", "Germany");
console.log(berlin.name);
console.log(berlin.country);
