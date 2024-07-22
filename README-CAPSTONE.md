# Capstone Part 1

## Snowtooth Mountain App 🌄🎿

In this step, we'll create a class with appropriate types.

1. Review the `hotels.json` file.
2. Create a model for this data as a class in the `script.ts` file.
3. The `Hotel` class should have all of the properties of the hotel.

```json
{
  "id": "05",
  "name": "Majestic Peak Lodge",
  "cost": 1000,
  "amenities": ["airport shuttle"]
}
```

4. Create a constructor function that sets the `id` and `name` fields as readonly, `cost` as a regular property, and `amenities` as an array of strings.
5. Create a method called `addAmenity` that adds a new amenity to the array.
6. Create a method called `describeHotel` that returns the following sentence: The <hotel.name> costs <hotel.cost> and includes the following amenities: <hotel.amenities>.
