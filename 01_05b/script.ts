interface City {
  name: string;
  population: number;
  country: string;
}

interface CapitalCity extends City {
  capitalBuilding: string;
  landmarks: string[];
}

const tokyo: CapitalCity = {
  name: "Tokyo",
  population: 37400000,
  country: "Japan",
  capitalBuilding: "Tokyo Metropolitan Government Building",
  landmarks: [
    "Imperial Palace",
    "Tokyo Tower",
    "Tokyo Skytree"
  ]
};

console.log(tokyo);
