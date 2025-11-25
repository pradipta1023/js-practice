// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters
function reverseFibonacci(n) {
  const fibonacci = fibonacciSeries(n);
  return reverse(fibonacci);
}

function reverse(array) {
  return reverseArray(array, 0, array.length - 1, []);
}

function reverseArray(array, index, reverseIndex, reversedArray) {
  if (index === array.length || reverseIndex === -1) {
    return reversedArray;
  }
  
  reversedArray[reverseIndex] = array[index];
  return reverseArray(array, index + 1, reverseIndex - 1, reversedArray);
}

function fibonacciSeries(endOfRange) {
  let sum = 0;
  let currentTerm = 0;
  let nextTerm = 1;
  let fibonacciArray = [];

  for (let term = 0; term < endOfRange; term++) {
    fibonacciArray[term] = currentTerm;
    sum = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = sum;
  }
  return fibonacciArray;
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

function testReverseFibonacci(number, expected, testDesc) {
  const actual = reverseFibonacci(number);
  const fragmentMsg = composedMessage(number, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testReverseFibonacci(7, [8, 5, 3, 2, 1, 1, 0], "For 7 terms"));
  console.log(testReverseFibonacci(6, [5, 3, 2, 1, 1, 0], "For 6 terms"));
  console.log(testReverseFibonacci(5, [3, 2, 1, 1, 0], "For 5 terms"));
  console.log(testReverseFibonacci(4, [2, 1, 1, 0], "For 4 terms"));
  console.log(testReverseFibonacci(3, [1, 1, 0], "For 3 terms"));
  console.log(testReverseFibonacci(2, [1, 0], "For 2 terms"));
  console.log(testReverseFibonacci(1, [0], "For 1 term"));
}

main();