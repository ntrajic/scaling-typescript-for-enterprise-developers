"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("We're ready!");
class City {
    name;
    country;
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    getCityInfo() {
        return this.displayInfo();
    }
    displayInfo() {
        return `$(this.name), $(this.country)`;
    }
}
const berlin = new City("Berlin", "Germany");
console.log(berlin.name);
console.log(berlin.country);
