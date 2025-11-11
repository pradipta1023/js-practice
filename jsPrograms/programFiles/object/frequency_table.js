const frequencyTable = (frequency, target) => {
  if (!(target in frequency)) {
    frequency[target] = 0;
  }
  frequency[target]++;
  return frequency;
};

const fruits = ["apple", "banana", "mango", "apple", "mango"];

const buildFrequencyTable = () => {
  const frequencyTableOfFruits = fruits.reduce(frequencyTable, {});
  console.log(frequencyTableOfFruits);
};

function main() {
  buildFrequencyTable();
}

main();
