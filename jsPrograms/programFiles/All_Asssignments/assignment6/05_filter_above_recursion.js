// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters
function filterBelow(array, threshold) {
  return numbersBelowThreshold(array, threshold, 0, []);
}

function numbersBelowThreshold(array, threshold, index, numbersAboveValue) {
  if (index === array.length) {
    return numbersAboveValue;
  }
  if (array[index] > threshold) {
    numbersAboveValue[numbersAboveValue.length] = array[index];
  }
  return numbersBelowThreshold(array, threshold, index + 1, numbersAboveValue);
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
  console.log(testFilterBelow([6, 2, 3, 1, 4, 7], 3 [6, 4, 7], "above 3"));
  console.log(testFilterBelow([1, 2, 3], 4 , [], "0 numbers above threshold"));
  console.log(testFilterBelow([], 4 , [], "Empty array"));
  console.log(testFilterBelow([100, 2, 7, 3, 9, 0], 99 , [100], "diff digit"));
}

main();