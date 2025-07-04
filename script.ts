console.log("We're ready!");
class City {
  name:string;
  country:string;
  constructor(name:string, country: string){
    this.name = name;
    this.country = country;
  }
  getCityInfo(): string {
    return this.displayInfo();
  }
  private displayInfo(): string{
    return `$(this.name), $(this.country)`
  }
}

const berlin = new City("Berlin","Germany");
console.log(berlin.name);
console.log(berlin.country);