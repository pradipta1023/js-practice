const VIRAT_ODI_RUNS = [74, 0, 0, 1, 84, 11, 100, 22, 52, 5, 20, 14, 24, 54, 117, 51, 101, 88, 0, 95, 103, 16, 55, 85, 56, 3, 122, 4, 54, 31, 4, 36, 11, 8, 166, 4, 113, 113, 5, 9, 17, 16, 0, 18, 8, 65, 0, 51, 7, 66, 56, 63, 89, 21, 9, 15, 51, 89, 78, 16, 85, 0, 4, 114, 120];

const names = ["Pradipta", "Sagnik", "Arijit", "Ajoy", "Siddhartha", 1, 4, 8, 11];

const isString = function(value) {
  return typeof value === "string";
}

const orderOfSorting = function(firstValue, secondValue, isGreaterThan) {
  firstValue = isString(firstValue) ? firstValue.length : firstValue;
  secondValue = isString(secondValue) ? secondValue.length : secondValue;

  return isGreaterThan(firstValue,secondValue);
}

const sort = function(data, isGreaterThan) {
  const sortedData = data.slice();

  for (let i = 0; i < sortedData.length - 1; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (orderOfSorting(sortedData[i], sortedData[j], isGreaterThan)) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return sortedData;
}

const descending = function(firstValue, secondValue) {
  return firstValue < secondValue;
}

const ascending = function(firstValue, secondValue) {
  return firstValue > secondValue;
}



function main() {
  console.log(sort(names, ascending));
  console.log(sort(VIRAT_ODI_RUNS, descending));
}

main();
