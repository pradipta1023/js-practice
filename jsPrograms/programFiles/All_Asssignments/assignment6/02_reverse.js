// Given an array return reverse of array. DO NOT USE `.reverse()` function
// Write your own implementation of reverse
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters
function reverse(array) {
  const reversed = [];
  const lengthOfArray = array.length - 1;

  for (let index = 0; index < array.length; index++) {
    reversed[lengthOfArray - index] = array[index];
  }

  return reversed;
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

function testReverse(arrayToReverse, expected, testDesc) {
  const actual = reverse(arrayToReverse);
  const fragmentMsg = composedMessage(arrayToReverse, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testReverse([1, 2, 3], [3, 2, 1], "simple check"));
  console.log(testReverse([2, 8, 1, 9], [9, 1, 8, 2], "Mixed numbers"));
  console.log(testReverse([1], [1], "Mixed numbers"));
  console.log(testReverse([], [], "Empty array"));
}

main();