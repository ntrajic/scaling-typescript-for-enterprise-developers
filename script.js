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
function logCreator(creator) {
    var creatorType = "<unknown>";
    var created = [];
    if (Array.isArray(creator.authored)) {
        creatorType = "author";
        created = creator.authored;
    }
    else if (Array.isArray(creator.created)) {
        creatorType = "artist";
        created = creator.created;
    }
    else if (Array.isArray(creator.directed)) {
        creatorType = "director";
        created = creator.directed;
    }
    else if (Array.isArray(creator.produced)) {
        creatorType = "producer";
        created = creator.produced;
    }
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is a ").concat(creatorType, " who helped create ").concat(created.join(", ")));
}
for (var creatorKey in creators) {
    for (var _i = 0, _a = creators[creatorKey]; _i < _a.length; _i++) {
        var creator = _a[_i];
        logCreator(creator);
    }
}
