"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hotel {
    id;
    name;
    cost;
    amenities = [];
    category;
    activities = [];
    constructor(id, name, cost, category) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.category = category;
    }
    addAmenity(amenity) {
        this.amenities.push(amenity);
    }
    describeHotel() {
        return `The ${this.category} category ${this.name} costs $${this.cost} and includes the following amenities: ${this.amenities.join(", ")}.`;
    }
    addActivity(activity) {
        this.activities.push(activity);
    }
}
const peakLodge = new Hotel("06", "Peak Lodge", 250, "silver");
const hiking = {
    name: "Eastlake Summit Hike",
    location: "Eastlake Trailhead",
    attendees: [
        { name: "John Wilson", interest: "adrenaline sports" }
    ]
};
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
peakLodge.addActivity(hiking);
let description = peakLodge.describeHotel();
console.log(description);
