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

const map = function (data, predicate) {
  const resultArray = [];

  for (const element of data) {
    resultArray.push(predicate(element));
  }

  return resultArray;
};

const numbers = [1, 2, 3, 4, 5, 6];

const flatMap = (array, mapper) => flat(map(array, mapper));

const half = (value) => value / 2;
const square = (value) => value ** 2;

const mappedNumbers = flatMap(numbers, half);
const mappedNumbers1 = flatMap(numbers, square);

console.log(mappedNumbers, mappedNumbers1);
