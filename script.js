var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var invalidAirports = [
    { name: "Heathrow", code: "lhr", country: "UK" },
    { name: "JFK", code: "jfk", country: "USA" },
    { name: "Schiphol", code: "ams", country: "Netherlands" },
    { name: "Changi", code: "sin", country: "Singapore" },
    { name: "Dubai", code: "dxb", country: "UAE" },
    { name: "Los Angeles", code: "lax", country: "USA" }
];
invalidAirports.push({
    name: "Frankfurt",
    code: "fra",
    country: "Germany"
});
function transformData(data, transform) {
    return data.map(transform);
}
var airports = transformData(invalidAirports, function (airport) {
    return __assign(__assign({}, airport), { code: airport.code.toUpperCase(), original: airport });
});
console.table(airports);
