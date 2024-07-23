import { describe, it, expect } from "vitest";
import { printCity, type City } from "./script";

describe("printCity", () => {
  it("Should return the city name and country", () => {
    const city: City = {
      name: "San Francisco",
      country: "USA"
    };
    const result = printCity(city);
    expect(result).toBe("San Francisco, USA");
  });
});
