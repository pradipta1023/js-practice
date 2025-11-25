// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters
function fibonacci(nthTerm) {
  return fibonacciSeries(nthTerm);
}

function fibonacciSeries(endOfRange) {
  let sum = 0;
  let currentTerm = 0;
  let nextTerm = 1;
  const seriesOfFibonacci = [];

  for (let term = 0; term < endOfRange; term++) {
    seriesOfFibonacci[term] = currentTerm;
    sum = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = sum;
  }
  
  return seriesOfFibonacci;
}

function isSameResult(actual, expected, index) {
  if (index === actual.length) {
    return true;
  }
  if (actual.length !== expected.length || actual[index] !== expected[index]) {
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

function testFibonacci(number, expected, testDesc) {
  const actual = fibonacci(number);
  const fragmentMsg = composedMessage(number, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testFibonacci(5, [0, 1, 1, 2, 3], "For 5 terms"));
  console.log(testFibonacci(4, [0, 1, 1, 2], "For 4 terms"));
  console.log(testFibonacci(3, [0, 1, 1], "For 3 terms"));
  console.log(testFibonacci(2, [0, 1], "For 2 terms"));
}

main();