import { Cities } from "./city.js";

const city: Cities.City = {
  name: "Toledo",
  country: "Spain"
};

console.log(Cities.formatCity(city));
