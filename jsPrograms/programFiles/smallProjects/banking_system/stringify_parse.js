// const accounts = [
//   {
//     name: "Pradipta",
//     accountNumber: 374936293,
//     password: 12345,
//     hasLoan: true,
//     loanAmount: 100000,
//     transactions: [""],
//   },
//   {
//     name: "Sonai",
//     accountNumber: 374939293,
//     password: 45679,
//     hasLoan: false,
//     loanAmount: 0,
//     transactions: [{
//       deposit: 10000,
//       time: new Date().toTimeString().slice(0, 8),
//     }, {
//       withdraw: 20000,
//       time: new Date().toTimeString().slice(0, 8),
//     }],
//   },
// ];

const stringifyTransactionDetails = (transactionDetails) => {
  const transactions = Object.entries(transactionDetails)
    .slice(7)
    .flatMap((x) => x);

  if (!transactions[1][0]) {
    return "transactions=" + [""];
  }

  return "transactions=" + transactions[1]
    .map((x) => Object.entries(x))
    .map((x) => x.join("$"))
    .reduce((acc, curr) => (acc + curr + "|"), "|");
};

const stringifyTransaction = (transactionDetails) => {
  if (transactionDetails[0] !== "") {
    return stringifyTransactionDetails(transactionDetails);
  }
  return [];
};

export const convertToString = (acc, curr) => {
  const pairs = Object.entries(curr).slice(0, 7);
  const pairsOfObject = pairs.map((pair) => pair.join("="));

  const stringifiedTransaction = stringifyTransaction(curr);

  pairsOfObject.push(stringifiedTransaction);
  acc.push(pairsOfObject.join(";"));

  return acc;
};

export const stringify = (accounts) =>
  accounts
    .flatMap((account) => account)
    .reduce(convertToString, [])
    .join("\n");

const transaction = (details) => {
  const transactions = {};

  for (let index = 0; index < details.length; index++) {
    const [key, value] = details[index].split(",");
    transactions[key] = value;
  }

  return transactions;
};

const transactionsOfUser = (detailsOfObject) => {
  const transactions = [];

  for (let index = 1; index < detailsOfObject.length - 1; index += 1) {
    transactions.push(transaction(detailsOfObject[index]));
  }

  return transactions;
};

const handleTransaction = (acc, curr) => {
  if (!curr[1]) {
    acc[curr[0]] = [""];
    return acc;
  }

  const detailsOfObject = curr[1]
    .split("|")
    .map((x) => x.split("$"));

  acc[curr[0]] = transactionsOfUser(detailsOfObject);
  return acc;
};

const createObject = (acc, curr) => {
  if (curr[0] === "transactions") {
    return handleTransaction(acc, curr);
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

const parseDetails = (personDetails) =>
  personDetails
    .map((person) => person.split(";"))
    .map((key) =>
      key
        .map((value) => value.split("="))
    );

export const parse = (string) => {
  const personDetails = string.split("\n");

  if (!personDetails[0]) {
    return [];
  }

  const object = parseDetails(personDetails);

  return object.reduce(createJson, []);
};

// const stringified = stringify(accounts);
// // console.log(stringified);

// console.log(parse(stringified));
