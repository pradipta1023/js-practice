const interns = {
  47281: {
    name: "Pradipta",
    state: "West Bengal",
    age: 20,
  },
  47282: {
    name: "Sagnik",
    state: "West Bengal",
    age: 21,
  },
  "APC ROY": {
    name: "Siddhartha",
    state: "West Bengal",
    age: 20,
  },
  47276: {
    name: "Ajoy",
    state: "West Bengal",
    age: 20,
  },
  47285: {
    name: "Oiendrila",
    state: "West Bengal",
    age: 19,
  },
  47298: {
    name: "Paulami",
    state: "West Bengal",
    age: 19,
  },
  47283: {
    name: "Sandip",
    state: "West Bengal",
    age: 19,
  },
  47289: {
    name: "Pradip",
    state: "West Bengal",
    age: 19,
  },
  47294: {
    name: "Samiran",
    state: "West Bengal",
    age: 21,
  },
};

// for (const [key, ...intern] of Object.entries(interns)) {
//   console.log(key, ...intern);
// }
const countryAndContinent = ["India", "Asia"];
const stateAndCountry = ["West Bengal", ...countryAndContinent];
const intern = ["Pradipta", ...stateAndCountry];
const intern2 = ["Sagnik", ...stateAndCountry];
const intern1 = ["Ajoy", ...stateAndCountry];

// console.log(intern, intern1, intern2);

const sumOfElements = (sum, currentItem) => sum + currentItem;

const sumOf = (...items) => items.reduce(sumOfElements, 0);

console.log(sumOf(1, 2, 3, 4, 5, 6));
