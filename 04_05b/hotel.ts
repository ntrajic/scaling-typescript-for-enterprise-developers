export type HotelCategory = "gold" | "silver" | "bronze";

export class Hotel {
  readonly id: string;
  readonly name: string;
  cost: number;
  amenities: string[] = [];
  category: HotelCategory;

  constructor(
    id: string,
    name: string,
    cost: number,
    category: HotelCategory
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.category = category;
  }

  addAmenity(amenity: string) {
    this.amenities.push(amenity);
  }
  describeHotel(): string {
    return `The ${this.category} category ${
      this.name
    } costs $${
      this.cost
    } and includes the following amenities: ${this.amenities.join(
      ", "
    )}.`;
  }
}
