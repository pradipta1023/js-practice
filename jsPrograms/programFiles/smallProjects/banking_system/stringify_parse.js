const accounts = [
  {
    id: 1,
    name: "Pradipta",
    accountNumber: 374936293,
    password: 12345,
    hasLoan: true,
    loanAmount: 100000,
    transactions: [],
  },
  {
    id: 2,
    name: "Sonai",
    accountNumber: 374939293,
    password: 45679,
    hasLoan: false,
    loanAmount: 0,
    transactions: ["abc", "efg"],
  },
];

const stringify = (acc, curr) => {
  const pairs = Object.entries(curr);
  const pairsOfObject = pairs.map((pair) => pair.join("="));
  acc.push(pairsOfObject.join(";"));
  return acc;
};

const stringified = accounts.flatMap((account) => account).reduce(stringify, [])
  .join("\n");
// console.log(stringified);

const createObject = (acc, curr) => {
  if (curr[0] === "transactions") {
    acc[curr[0]] = curr[1].split(",");
    return acc;
  }
  acc[curr[0]] = curr[1];
  return acc;
};

const createJson = (acc, curr) => {
  acc.push(curr.reduce(createObject, {}));
  return acc;
};

const parse = (string) => {
  const personDetails = string.split("\n");
  let object = personDetails
    .map((person) => person.split(";"))
    .map((key) =>
      key
        .map((value) => value.split("="))
    );
  console.log(object);
  object = object.reduce(createJson, []);
  console.log(object);
};

parse(stringified);

// console.log(stringified.split("\n"));
