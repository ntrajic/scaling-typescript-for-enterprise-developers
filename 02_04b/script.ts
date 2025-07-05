type Language = string | null;

let language: Language = null;
language = "Mandarin";

console.log(language);

type CityName = "Seoul" | "Seattle" | "Sydney";

function welcomeToCity(city: CityName): string {
  return `Welcome to ${city}`;
}

console.log(welcomeToCity("Seoul"));
console.log(welcomeToCity("Sydney"));
console.log(welcomeToCity("Minneapolis"));