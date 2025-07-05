class City {
  name: string;
  country: string;

  constructor(name: string, country: string) {
    this.name = name;
    this.country = country;
  }
  getCityInfo(): string {
    return this.displayInfo();
  }
  private displayInfo(): string {
    return `${this.name}, ${this.country}`;
  }
}

const city = new City("Bend", "United States");
console.log(city.name);
console.log(city.country);
