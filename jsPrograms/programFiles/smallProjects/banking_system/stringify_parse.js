// const accounts = [
//   {
//     id: 1,
//     name: "Pradipta",
//     accountNumber: 374936293,
//     password: 12345,
//     hasLoan: true,
//     loanAmount: 100000,
//     transactions: [],
//   },
//   {
//     id: 2,
//     name: "Sonai",
//     accountNumber: 374939293,
//     password: 45679,
//     hasLoan: false,
//     loanAmount: 0,
//     transactions: ["abc", "efg"],
//   },
// ];

export const convertToString = (acc, curr) => {
  const pairs = Object.entries(curr);
  const pairsOfObject = pairs.map((pair) => pair.join("="));
  acc.push(pairsOfObject.join(";"));
  return acc;
};

export const stringify = (accounts) =>
  accounts
    .flatMap((account) => account)
    .reduce(convertToString, [])
    .join("\n");

const createObject = (acc, curr) => {
  if (curr[0] === "transaction") {
    acc[curr[0]] = curr[1].split(",");
    return acc;
  }
  if (curr[0] === "balance") {
    curr[1] = +curr[1];
  }
  acc[curr[0]] = curr[1];
  return acc;
};

export const createJson = (acc, curr) => {
  acc.push(curr.reduce(createObject, {}));
  return acc;
};

export const parse = (string) => {
  const personDetails = string.split("\n");
  const object = personDetails
    .map((person) => person.split(";"))
    .map((key) =>
      key
        .map((value) => value.split("="))
    );

  return object.reduce(createJson, []);
};
