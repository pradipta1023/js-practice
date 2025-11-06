// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters
function filterAbove(array, threshold) {
  const numbersAboveValue = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      numbersAboveValue.push(array[index]);
    }
  }

  return numbersAboveValue;
}

function isSameResult(actual, expected, index) {
  if (index === actual.length) {
    return true;
  }
  if (actual.length !== expected.length) {
    return false;
  }
  if (actual[index] !== expected[index]) {
    return false;
  }
  return isSameResult(actual, expected, index + 1);
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
    return messageForPassedCase(testDesc);
  }

  return failedCase;
}

function messageForPassedCase(testDesc) {
  return `✅ ${testDesc}`;
}

function testFilterAbove(arrayToCheck, threshold, expected, testDesc) {
  const actual = filterAbove(arrayToCheck, threshold);
  const fragmentMsg = composedMessage(arrayToCheck, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testFilterAbove([6, 2, 3, 1, 4, 7], 3[6, 4, 7], "above 3"));
  console.log(testFilterAbove([1, 2, 3], 4, [], "0 numbers above threshold"));
  console.log(testFilterAbove([], 4, [], "Empty array"));
  console.log(testFilterAbove([100, 2, 7, 3, 9, 0], 99, [100], "diff digit"));
}

main();