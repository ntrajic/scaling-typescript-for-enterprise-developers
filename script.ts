export type City = {
  name: string;
  country: string;
};

export function printCity(city: City): string {
  return `${city.name}, ${city.country}`;
}
