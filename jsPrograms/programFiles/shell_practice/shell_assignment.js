// const dbg = (x) => {
//   console.log(x);
//   return x;
// };

const data = Deno.readTextFileSync("./finalSrk.csv");
const noOfTimes = data.match(/Actor/g).length;
console.log(
  `1. How many films has Shah Rukh Khan acted in?\n-> ${noOfTimes}`,
);

const lines = data.split("\n");

const actedMovieDetails = lines
  .filter((line) => line.match(/Actor/g))
  .map((x) => x.split(","));

const frequency = (acc, curr) => {
  if (!(curr[1] in acc)) {
    acc[curr[1]] = 0;
  }

  acc[curr[1]]++;
  return acc;
};

const frequencyOfMoviesInAYear = actedMovieDetails.reduce(frequency, {});

const maxBy = (a, b) => a[1] < b[1] ? b : a;

const maxMoviesOfYear = Object.entries(frequencyOfMoviesInAYear)
  .reduce((max, ele) => maxBy(max, ele));

console.log(maxMoviesOfYear);

const directors = lines.map((line) => line.match(/[^,]+$/g));

const sortedDirectorNames = directors.toSorted();
// console.log(sortedDirectorNames);

const directorFrequency = (acc, curr) => {
  if (!(curr in acc)) {
    acc[curr] = 0;
  }

  acc[curr]++;
  return acc;
};

const frequencyOfDirectors = directors.reduce(directorFrequency, {});

const multipleOccurence = Object.entries(frequencyOfDirectors)
  .filter((occurance) => occurance[1] > 1);

const directorNames = multipleOccurence.map((director) => director[0]);

console.log(directorNames);

const listOfFirstLetters = lines.map((line) => line.match(/\w/));

const firstLetters = listOfFirstLetters.map((a) => a[0]);

const frequencyOfLetter = (acc, curr) => {
  if (!(curr in acc)) {
    acc[curr] = 0;
  }

  acc[curr]++;
  return acc;
};

const startLetterFrequency = firstLetters.reduce(frequencyOfLetter, {});

const maxOccurredLetter = Object.entries(startLetterFrequency)
  .reduce((max, ele) => maxBy(max, ele));

console.log(maxOccurredLetter);

const listOfNamesWithYear = lines.map((x) => x.match(/\w+,\d+/));

const namesWithYear = listOfNamesWithYear.filter((a) => a).map((a) => a[0]);

const sortedByYear = namesWithYear.map((a) => a.split(",")).sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }

  return -a[0].charCodeAt() + b[0].charCodeAt();
});

console.log(sortedByYear);

const maxWorkedWith = Object.entries(frequencyOfDirectors)
  .reduce((max, ele) => maxBy(max, ele));

console.log(maxWorkedWith);

const listOfFirstWords = lines.map((line) => line.match(/\w+,/));

const firstWordFrequency = (acc, curr) => {
  if (!(curr in acc)) {
    acc[curr] = 0;
  }

  acc[curr]++;
  return acc;
};

const frequencyOfFirstWords = listOfFirstWords.reduce(firstWordFrequency, {});

const maxOccured = Object.entries(frequencyOfFirstWords)
  .reduce((max, ele) => maxBy(max, ele));

console.log(maxOccured);

const listOfWords = lines.map((line) => line.match(/[^0-9]/g));

const movieWords = listOfWords.map((word) =>
  word.slice(0, word.indexOf(",")).join("")
);

const wordFrequency = (acc, curr) => {
  const words = curr.split(" ");

  words.map((word) => {
    if (!(word in acc)) {
      acc[word] = 0;
    }

    acc[word]++;
  });

  return acc;
};

const frequencyOfWords = movieWords.reduce(wordFrequency, {});

const maxOccuredWord = Object.entries(frequencyOfWords)
  .reduce((max, ele) => maxBy(max, ele));

console.log(maxOccuredWord);

// setInterval(() => {
//   console.clear();
//   console.log(new Date().toTimeString().slice(0, 9));
// }, 1000);

console.log("Start");
setInterval(() => console.log("Hello"), 5000);
console.log("End");
