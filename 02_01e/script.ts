const city1 = {
  name: "Istanbul",
  country: "Turkey"
};

type CityWithInfo = typeof city1;

const city2: CityWithInfo = {
  name: "Amsterdam",
  country: "Netherlands"
};

type CityWithNickname = typeof city2 & {
  nickname: string;
};

const venice: CityWithNickname = {
  name: "Venice",
  country: "Italy",
  nickname: "The Floating City"
};

console.log(venice);
