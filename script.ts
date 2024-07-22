type City = {
  name: string;
  country: string;
};

type PartialCity = Partial<City>;

const city1: PartialCity = {
  name: "Istanbul"
};

type RequiredCity = Required<City>;
const city2: RequiredCity = {
  name: "Barcelona",
  country: "Spain"
};

console.log(city2);
