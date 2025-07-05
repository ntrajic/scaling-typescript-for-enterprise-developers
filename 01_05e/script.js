var City = /** @class */ (function () {
    function City(name) {
        this.name = name;
    }
    return City;
}());
function outputLocation(location) {
    if (location instanceof City) {
        console.log(location.name);
    }
    else {
        console.log(location);
    }
}
outputLocation(new City("Copenhagen"));
outputLocation("Boise");
outputLocation(56);
