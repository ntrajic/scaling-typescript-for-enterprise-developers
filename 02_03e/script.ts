type City = {
  name: string;
  country: string;
};

type ReadonlyCity = Readonly<City>;

const city3: ReadonlyCity = {
  name: "Berlin",
  country: "Germany"
};

// city3.country = "UK";

type CityName = Pick<City, "name">;
const city4: CityName = {
  name: "Paris"
};

console.log(city4);

type CityWithoutCountry = Omit<City, "country">;
const city5: CityWithoutCountry = {
  name: "Rome"
};

console.log(city5);
