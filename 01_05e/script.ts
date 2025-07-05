class City {
  constructor(public name: string) {}
}

function outputLocation(location: City | string) {
  if (location instanceof City) {
    console.log(location.name);
  } else {
    console.log(location);
  }
}

outputLocation(new City("Copenhagen"));
outputLocation("Boise");
