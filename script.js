"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hotel = /** @class */ (function () {
    function Hotel(id, name, cost, category) {
        this.amenities = [];
        this.activities = [];
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.category = category;
    }
    Hotel.prototype.addAmenity = function (amenity) {
        this.amenities.push(amenity);
    };
    Hotel.prototype.describeHotel = function () {
        return "The ".concat(this.category, " category ").concat(this.name, " costs $").concat(this.cost, " and includes the following amenities: ").concat(this.amenities.join(", "), ".");
    };
    Hotel.prototype.addActivity = function (activity) {
        this.activities.push(activity);
    };
    return Hotel;
}());
var peakLodge = new Hotel("06", "Peak Lodge", 250, "silver");
var hiking = {
    name: "Eastlake Summit Hike",
    location: "Eastlake Trailhead",
    attendees: [
        { name: "John Wilson", interest: "adrenaline sports" }
    ]
};
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
peakLodge.addActivity(hiking);
var description = peakLodge.describeHotel();
console.log(description);
