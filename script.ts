interface Creator {
  firstName: string;
  lastName: string;
  authored?: string[];
  created?: string[];
  directed?: string[];
  produced?: string[];
}

const authors: Creator[] = [
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

const artists: Creator[] = [
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

const directors: Creator[] = [
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

const producers: Creator[] = [
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

const creators: Record<string, Creator[]> = {
  authors,
  artists,
  directors,
  producers
};

function logCreator(creator: Creator) {
  let creatorType = "<unknown>";
  let created: string[] = [];

  if (Array.isArray(creator.authored)) {
    creatorType = "author";
    created = creator.authored;
  } else if (Array.isArray(creator.created)) {
    creatorType = "artist";
    created = creator.created;
  } else if (Array.isArray(creator.directed)) {
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

for (let creatorKey in creators) {
  for (let creator of creators[creatorKey]) {
    logCreator(creator);
  }
}