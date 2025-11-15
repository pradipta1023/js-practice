// Write a function that calculates the square root of every value in an array.
//  Return a new array that contains all the square roots.

// Example: [1,4,9,16] => [1,2,3,4]

// Write a function that selects only the odd numbers in an array.

// Example: [1,2,3,4] => [1,3]

// Write a function that calculates half the value of every value in an array.

// Example: [10,20,31] => [5,10,15.5]

// Write a function that selects only the strings with more than 5 characters.

// Example: ["impossible", "possible", "no"] => ["impossible", "possible"]

// Write a function that calculates the product of all numbers in an array.

// Write a function that checks if there is at least one odd number in an array.

// Example:
// [1,2,3,4] => true
// [2,4] => false

const squareRootOf = function (data) {
  return Math.sqrt(data);
}

const isOdd = function (data) {
  return data % 2 !== 0;
}

const halfOf = function (data) {
  return data / 2;
}

const stringsWithMoreThan5Chars = function (data, length = 5) {
  return data.length > length;
}

function convertToUpperCase(data) {
  return data.toUpperCase();
}

const map = function (data, task) {
  const resultantString = [];

  for (let index = 0; index < data.length; index++) {
    const currentValue = data[index];
    const result = task(currentValue);
    resultantString.push(result);
  }

  return resultantString;
}

const filter = function (data, task) {
  const resultantString = [];

  for (let index = 0; index < data.length; index++) {
    const currentValue = data[index];
    const result = task(currentValue);
    if (result) {
      resultantString.push(currentValue);
    }
  }

  return resultantString;
}

const multiply = function (operand1, operand2) {
  return operand1 * operand2;
}

const noOfOddCount = function(data, task) {
  let countOfOdds = 0;

  for (let index = 0; index < data.length; index++) {
    if (task(data[index])) {
      countOfOdds++;
    }
  }

  return countOfOdds;
}

const concat = function (string1, string2) {
  return string1 + string2;
}

const compress = function (data, task) {
  let result = data[0];

  for (let index = 1; index < data.length; index++) {
    result = task(result, data[index]);
  }
  
  return result;
}

const greaterThan100 = function(value) {
  return value > 100;
}

const keepTrue = function(value1, value2) {
  return value1 || value2;
}

const keepFalse = function(value1, value2) {
  return value1 && value2;
}

const stringsWithMoreThan3Chars = function(data) {
  return data.length > 3;
}

const isNegative = function(data) {
  return data > 0;
}

const filterToBooleanAtLeastOneTrue = function(data, task, functionToChoose) {
  let result = false;

  for (let index = 0; index < data.length; index++) {
    result = functionToChoose(task(data[index]), result);
  }

  return result;
}

const filterToBooleanIfAllTrue = function(data, task) {
  let result = true;

  for (let index = 0; index < data.length; index++) {
    result = keepFalse(task(data[index]), result);
  }

  return result;
}

function isEqual(x, y, index) {
  return x === y;
}

function checkResult(actual, expected, checkFunction) {
  return checkFunction(actual, expected, 0);
}

function areDeepEqual(actual, expected, index) {
  // console.log(actual, expected, index, actual.length);
  if (index === actual.length) {
    return true;
  }
  if (actual.length !== expected.length) {
    return false;
  }
  if (!isEqual(actual[index], expected[index])) {
    return false;
  }
  return areDeepEqual(actual, expected, index + 1);
}

function composedMessage(numbers, actual) {
  const inputMessage = `\t|Input : [${numbers}]`;
  const outputMessage = `\n\t|\n\t|Output : ${actual}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSame, fragmentMsg, expected, testDesc) {
  const expectation = "\n\t|Expected output : " + expected;
  const emojiForFailedCase = `----------\n❌ ${testDesc}\n`;
  const failedCase = emojiForFailedCase + fragmentMsg + expectation;

  if (isSame) {
    return successMessage(testDesc);
  }

  return failedCase;
}

function successMessage(testDesc) {
  return `✅ ${testDesc}`;
}

const longerString = function (string1, string2) {
  return string1.length < string2.length ? string2 : string1;
}

function testFilter(data, task, expected, testDesc, functionToUse, checkFunction, boolFunctionToUse) {
  const actual = functionToUse(data, task, boolFunctionToUse);
  const fragmentMsg = composedMessage(data, actual);
  const isSame = checkResult(actual, expected, checkFunction);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function testSquareRoot() {
  console.log(testFilter([1, 4, 9, 16], squareRootOf, [1, 2, 3, 4], `
    simple square root`, map, areDeepEqual));
  console.log(testFilter([100, 900], squareRootOf, [10, 30], `
    simple square root`, map, areDeepEqual));
}

function testOddNumbers() {
  console.log(testFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], isOdd, [1, 3, 5, 7, 9], `
    odds from 1 - 10`, filter, areDeepEqual));
  console.log(testFilter([0, 5, 0, 7], isOdd, [5, 7], `
    for zero`, filter, areDeepEqual));
}

function testConvertHalfOfValue() {
  console.log(testFilter([1, 2, 3, 4, 5], halfOf, [0.5, 1, 1.5, 2, 2.5], `
    simple test`, map, areDeepEqual));
  console.log(testFilter([1, 3, 5, 7], halfOf, [0.5, 1.5, 2.5, 3.5], `
    odd numbers`, map, areDeepEqual));
  console.log(testFilter([0, 2, 4, 6, 8], halfOf, [0, 1, 2, 3, 4], `
    even numbers`, map, areDeepEqual));
}

function testStringsWithMoreThan5Chars() {
  console.log(testFilter(["Hello", "abcdef", "America"], stringsWithMoreThan5Chars, ["abcdef", "America"], `
    simple test`, filter, areDeepEqual));
  console.log(testFilter(["false", "yes", "no"], stringsWithMoreThan5Chars, [], `
    All are less than given threshold`, filter, areDeepEqual));
  console.log(testFilter(["kingdom", "notebook", "railway"], stringsWithMoreThan5Chars, ["kingdom", "notebook", "railway"], `
    All are greater than given threshold`, filter, areDeepEqual));
}

function testConvertToUpperCase() {
  console.log(testFilter(["false", "yes", "no"], convertToUpperCase, ["FALSE", "YES", "NO"], `
    For all lowercase`, map, areDeepEqual));
  console.log(testFilter(["kingdom", "NOTEBOOK", "railway"], convertToUpperCase, ["KINGDOM", "NOTEBOOK", "RAILWAY"], `
    for mix of uppercase and lowercase`, map, areDeepEqual));
  console.log(testFilter(["", "", ""], convertToUpperCase, ["", "", ""], `
    for empty string`, map, areDeepEqual));
}

function testLongestStringInAnArray() {
  console.log(testFilter(["false", "yes", "no"], longerString, "false", `
    shorter strings`, compress, isEqual));
  console.log(testFilter(["India", "England", "Hong Kong"], longerString, "Hong Kong", `
    longer strings`, compress, isEqual));
}

function testCombineListToString() {
  console.log(testFilter(["India", "Will", "Win"], concat, "IndiaWillWin", `
    simple check`, compress, isEqual));
}

function testProductOfElementsOfList() {
  console.log(testFilter([3, 3, 3], multiply, 27, `
    simple check`, compress, isEqual));
  console.log(testFilter([3, 2, 4], multiply, 24, `
    simple check`, compress, isEqual));
}

function testCountOfOdds() {
  console.log(testFilter([3, 3, 3, 5], isOdd, 4, `
    all odds`, noOfOddCount, isEqual));
  console.log(testFilter([2, 4, 6, 8], isOdd, 0, `
    all evens`, noOfOddCount, isEqual));
  console.log(testFilter([2, 4, 6, 8, 3, 1, 7], isOdd, 3, `
    mix odds and evens`, noOfOddCount, isEqual));
}

function testAtLeastOneOdd() {
  console.log(testFilter([3, 3, 3, 5], isOdd, true, `
    all odds`, filterToBooleanAtLeastOneTrue, isEqual, keepTrue));
  console.log(testFilter([2, 4, 6, 8, 10], isOdd, false, `
    all evens`, filterToBooleanAtLeastOneTrue, isEqual, keepTrue));
}

function testGreaterThan100() {
  console.log(testFilter([100, 200], greaterThan100, true, `
    all greater than 100`, filterToBooleanAtLeastOneTrue, isEqual, keepTrue));
  console.log(testFilter([2, 4, 6, 8, 10], greaterThan100, false, `
    all less than 100`, filterToBooleanAtLeastOneTrue, isEqual, keepTrue));
}

function testNotNegative() {
  console.log(testFilter([100, 200], isNegative, true, `
    all positive`, filterToBooleanIfAllTrue, isEqual, keepFalse));
  console.log(testFilter([-1, -2, -3], isNegative, false, `
    all negative`, filterToBooleanIfAllTrue, isEqual, keepFalse));
  console.log(testFilter([1, 2, 5, 10, -1, -2, -3], isNegative, false, `
    mix check`, filterToBooleanIfAllTrue, isEqual, keepFalse));
}

function testStringsWithMoeThan3Chars() {
  console.log(testFilter(["abcd", "abcde"], stringsWithMoreThan3Chars, true, `
    all more than 3`, filterToBooleanIfAllTrue, isEqual, keepFalse));
  console.log(testFilter(["ab", "no", "yes"], stringsWithMoreThan3Chars, false, `
    all less than 3`, filterToBooleanIfAllTrue, isEqual, keepFalse));
  console.log(testFilter(["India", "America", "ab", "no", "yes"], stringsWithMoreThan3Chars, false, `
    mix check`, filterToBooleanIfAllTrue, isEqual, keepFalse));
}

function main() {
  testSquareRoot();
  testOddNumbers();
  testConvertHalfOfValue();
  testStringsWithMoreThan5Chars();
  testConvertToUpperCase();
  testLongestStringInAnArray();
  testCombineListToString();
  testProductOfElementsOfList();
  testCountOfOdds();
  testAtLeastOneOdd();
  testGreaterThan100();
  testNotNegative();
  testStringsWithMoeThan3Chars();
}

main();