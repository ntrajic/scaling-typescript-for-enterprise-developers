interface Creator {
  firstName: string;
  lastName: string;
  authored?: string[];
  created?: string[];
  directed?: string[];
  produced?: string[];
}

const authors = [
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
] satisfies Creator[];

const artists = [
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
] satisfies Creator[];

const directors = [
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
] satisfies Creator[];

const producers = [
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
] satisfies Creator[];

const creators = {
  authors,
  artists,
  directors,
  producers
} satisfies Record<string, Creator[]>;

for (let creator of creators.authors) {
  console.log(
    `${creator.firstName} ${
      creator.lastName
    } is an author who wrote the books ${creator.authored.join(
      ", "
    )}`
  );
}

for (let creator of creators.artists) {
  console.log(
    `${creator.firstName} ${
      creator.lastName
    } is an artist who created the albums ${creator.created.join(
      ", "
    )}`
  );
}

for (let creator of creators.directors) {
  console.log(
    `${creator.firstName} ${
      creator.lastName
    } is a director who directed the movies ${creator.directed.join(
      ", "
    )}`
  );
}

for (let creator of creators.producers) {
  console.log(
    `${creator.firstName} ${
      creator.lastName
    } is a producer who produced the movies ${creator.produced.join(
      ", "
    )}`
  );
}

const filmCreators: Creator[] = [
  ...directors,
  ...producers
];

for (let creator of filmCreators) {
  let creatorType = "<unknown>";
  let created: string[] = [];

  if (Array.isArray(creator.directed)) {
    creatorType = "director";
    created = creator.directed;
  } else if (Array.isArray(creator.produced)) {
    creatorType = "producer";
    created = creator.produced;
  }

  console.log(
    `${creator.firstName} ${
      creator.lastName
    } is a ${creatorType} who helped create ${created.join(
      ", "
    )}`
  );
}
