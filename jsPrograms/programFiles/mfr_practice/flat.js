const flat = (array, depth = 1, flatterned = []) => {
  for (const element of array) {
    if (Array.isArray(element) && depth > 0) {
      flat(element, depth - 1, flatterned);
    } else {
      flatterned.push(element);
    }
  }

  return flatterned;
};

const animals = ["crow", "eagle", ["cow", [["dog"]]], "flower", [
  "tiger",
  "lion",
], "fruit"];

console.log(flat(animals));
