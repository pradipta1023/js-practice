// Build a frequency summary of words used in a poem draft.

const words = [
  "Moonlight",
  "silent",
  "sea",
  "Moonlight",
  "the",
  "silent",
  "sea",
];

const frequency = (occurences, element) => {
  const occurence = occurences.find((occurence) => occurence[0] === element);

  occurence ? occurence[1] += 1 : occurences.push([element, 1]);

  return occurences;
};

const countOfWords = words.reduce(frequency, []);
console.log(countOfWords);

console.log(words.sort());
