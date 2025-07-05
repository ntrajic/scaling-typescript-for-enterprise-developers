var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var authors = [
    {
        firstName: "Harper",
        lastName: "Lee",
        authored: ["To Kill a Mockingbird", "Go Set a Watchman"]
    },
    {
        firstName: "Aldous",
        lastName: "Huxley",
        authored: ["Brave New World", "The Doors of Perception"]
    }
];
var artists = [
    {
        firstName: "Pink",
        lastName: "Floyd",
        created: ["The Dark Side of the Moon", "The Wall"]
    },
    {
        firstName: "Snoop",
        lastName: "Dogg",
        created: ["Tha Doggfather", "Coolaid"]
    }
];
var directors = [
    {
        firstName: "Christopher",
        lastName: "Nolan",
        directed: ["Inception", "Interstellar"]
    },
    {
        firstName: "Stanley",
        lastName: "Kubrick",
        directed: [
            "2001: A Space Odyssey",
            "A Clockwork Orange"
        ]
    }
];
var producers = [
    {
        firstName: "Emma",
        lastName: "Thomas",
        produced: ["Inception", "Interstellar"]
    },
    {
        firstName: "Katharina",
        lastName: "Otto-Bernstein",
        produced: ["Absolute Wilson", "Beuys"]
    }
];
var creators = {
    authors: authors,
    artists: artists,
    directors: directors,
    producers: producers
};
for (var _i = 0, _a = creators.authors; _i < _a.length; _i++) {
    var creator = _a[_i];
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is an author who wrote the books ").concat(creator.authored.join(", ")));
}
for (var _b = 0, _c = creators.artists; _b < _c.length; _b++) {
    var creator = _c[_b];
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is an artist who created the albums ").concat(creator.created.join(", ")));
}
for (var _d = 0, _e = creators.directors; _d < _e.length; _d++) {
    var creator = _e[_d];
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is a director who directed the movies ").concat(creator.directed.join(", ")));
}
for (var _f = 0, _g = creators.producers; _f < _g.length; _f++) {
    var creator = _g[_f];
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is a producer who produced the movies ").concat(creator.produced.join(", ")));
}
var filmCreators = __spreadArray(__spreadArray([], directors, true), producers, true);
for (var _h = 0, filmCreators_1 = filmCreators; _h < filmCreators_1.length; _h++) {
    var creator = filmCreators_1[_h];
    var creatorType = "<unknown>";
    var created = [];
    if (Array.isArray(creator.directed)) {
        creatorType = "director";
        created = creator.directed;
    }
    else if (Array.isArray(creator.produced)) {
        creatorType = "producer";
        created = creator.produced;
    }
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is a ").concat(creatorType, " who helped create ").concat(created.join(", ")));
}
