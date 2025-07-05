"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hotel {
    id;
    name;
    cost;
    amenities = [];
    category;
    reviews = [];
    constructor(id, name, cost, category) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.category = category;
    }
    addAmenity(amenity) {
        this.amenities.push(amenity);
    }
    addReview(review) {
        this.reviews.push(review);
    }
    describeHotel() {
        return `The ${this.category} category ${this.name} costs $${this.cost} and includes the following amenities: ${this.amenities.join(", ")}.`;
    }
}
const peakLodge = new Hotel("06", "Peak Lodge", 250, "silver");
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
peakLodge.addReview({ rating: 5, comment: "Excellent!" });
let description = peakLodge.describeHotel();
console.log(description);
console.log(peakLodge.reviews);
