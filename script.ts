function printCity<Type>(city: Type): void {
  console.log(city);
}

printCity<string>("London");
printCity<number>(123);

type Country<Type> = {
  name: Type;
  capital: Type;
};

const country: Country<string> = {
  name: "France",
  capital: "Paris"
};

console.log(country.name);
console.log(country.capital);
