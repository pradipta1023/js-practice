// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters
function filterBelow(array, threshold) {
  return numbersBelowThreshold(array, threshold, 0, []);
}

function numbersBelowThreshold(array, threshold, index, numbersBelowValue) {
  if (index === array.length) {
    return numbersBelowValue;
  }
  if (array[index] < threshold) {
    numbersBelowValue[numbersBelowValue.length] = array[index];
  }
  return numbersBelowThreshold(array, threshold, index + 1, numbersBelowValue);
}

function isSameResult(actual, expected, index) {
  if (index === actual.length) {
    return true;
  }
  if (actual.length !== expected.length || actual[index] !== expected[index]) {
    return false;
  }
  if (isArray(actual[index])) {
    return isSameResult(actual[index], expected[index], 0);
  }
  return isSameResult(actual, expected, index + 1);
}

function isArray(value) {
  return typeof value === "object";
}


function composedMessage(numbers, actual) {
  const inputMessage = `\t|Input : [${numbers}]`;
  const outputMessage = `\n\t|\n\t|Output : ${actual}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentMsg, expected, testDesc) {
  const expectation = "\n\t|Expected output : " + expected;
  const emojiForFailedCase = `----------\n❌ ${testDesc}\n`;
  const failedCase = emojiForFailedCase + fragmentMsg + expectation;

  if (isSameResult) {
    return messageForPassedCase(testDesc);
  }

  return failedCase;
}

function messageForPassedCase(testDesc) {
  return `✅ ${testDesc}`;
}


function testFilterBelow(array, threshold, expected, testDesc) {
  const actual = filterBelow(array, threshold);
  const fragmentMsg = composedMessage(array, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testFilterBelow([6, 2, 3, 1, 4], 3 [2, 1], "Numbers below 3"));
  console.log(testFilterBelow([1, 2, 3], 4 , [1, 2, 3], "No numbers"));
  console.log(testFilterBelow([1, 2, 3], 0 , [], "No number below threshold"));
  console.log(testFilterBelow([], 4 , [], "Empty array"));
  console.log(testFilterBelow([2, 7, 3, 100], 9 , [2, 7, 3], "simple"));
}

main();