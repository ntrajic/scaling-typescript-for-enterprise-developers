interface City {
  name: string;
  country: string;
  population: number;
}

type CityProperties = keyof City;

type CityProps = "name" | "city";

const cityProperties: CityProperties[] = [
  "name",
  "country",
  "population"
];
