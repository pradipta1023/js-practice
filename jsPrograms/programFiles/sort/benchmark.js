let noOfIteration = 0;
function generateRandomNumberBetweenRange(lower, upper) {
  return lower + Math.round(Math.random() * upper - lower);
}

function generateRandomNumbersArray(lengthOfArray) {
  const randomElements = [];
  for (let index = 0; index < lengthOfArray; index++) {
    randomElements.push(generateRandomNumberBetweenRange(10, 100));  
  }
  return randomElements;
}

function sort(data) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length - 1; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      noOfIteration++;
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
}

function benchMark(noOfElements) {
  const randomElements = generateRandomNumbersArray(noOfElements);
  noOfIteration = 0;
  sort(randomElements);
  console.log(`Number of elements : ${noOfElements} | Number of iterations : ${noOfIteration}`);
}

function main() {
  // benchMark(100);
  // benchMark(1000);
  // benchMark(10000);
  benchMark(1000000);
}

main();