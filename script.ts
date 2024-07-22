interface City {
  readonly name: string;
  population?: number;
  country: string;
}

let newYork: City = {
  name: "New York",
  population: 8336000,
  country: "United States"
};

newYork.population = 8123123;

console.log(newYork);

let london: City = {
  name: "London",
  country: "UK",
  population: 970000
};

console.log(london);
