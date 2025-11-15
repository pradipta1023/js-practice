const VIRAT_ODI_RUNS = [74, 0, 0, 1, 84, 11, 100, 22, 52, 5, 20, 14, 24, 54, 117, 51, 101, 88, 0, 95, 103, 16, 55, 85, 56, 3, 122, 4, 54, 31, 4, 36, 11, 8, 166, 4, 113, 113, 5, 9, 17, 16, 0, 18, 8, 65, 0, 51, 7, 66, 56, 63, 89, 21, 9, 15, 51, 89, 78, 16, 85, 0, 4, 114, 120];

const numbers = [1, 2, 3, 1, 4, 2, 3, 1, 2, 3, 3, 4, 4, 4];


const sort = function (data) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length - 1; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
}

const frequencies =  function(data) {
  const countOfElements = [];
  let sortedData = sort(data);
  let index = 0;
  while (index < sortedData.length) {
    const elements = [];
    const lastIndexOfCurrentElement = sortedData.lastIndexOf(sortedData[index]);
    elements.push(sortedData[index]);
    elements.push(lastIndexOfCurrentElement - index + 1);
    countOfElements.push(elements);
    index = lastIndexOfCurrentElement + 1;
  }

  return countOfElements;
}

const maxOf = function(data) {
  let max = -Infinity;
  for (let index = 0; index < data.length; index++) {
    if (max < data[index][1]) {
      max = data[index][1];
    }
  }

  return max;
}

const elementsWithSpecificFrequency = function(data, frequency) {
  const dataOfSameFrequency = [];
  for (let index = 0; index < data.length; index++) {
    if (data[index][1] === frequency) {
      dataOfSameFrequency.push(data[index][0]);
    }
  }

  return dataOfSameFrequency;
}

const mode = function(numbers) {
  const frequency = frequencies(numbers);
  const max = maxOf(frequency);
  const mostFrequentNumbers = elementsWithSpecificFrequency(frequency, max);

  return mostFrequentNumbers.join("\n");
}

function main() {
  console.log(mode(numbers));
  console.log(mode(VIRAT_ODI_RUNS));
}

main();