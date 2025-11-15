// Write a function that calculates the square root of every value in an array.
//  Return a new array that contains all the square roots.

// Example: [1,4,9,16] => [1,2,3,4]

const squareRoot = function (value) {
  return Math.sqrt(value);
}

const squareRootForArrayElements = function (data) {
  const squareRootValues = [];

  for (let index = 0; index < data.length; index++) {
    squareRootValues.push(squareRoot(data[index]));
  }

  return squareRootValues;
}

function isApproximatelyEqual(x, y) {
  const toleranceCheck = (x - y);
  return (toleranceCheck <= 0.01) && (toleranceCheck >= -0.01);
}

function isSameResult(actual, expected, index) {
  if (index === actual.length) {
    return true;
  }
  if (actual.length !== expected.length) {
    return false;
  }
  if (!isApproximatelyEqual(actual[index], expected[index])) {
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

function testSquareRootForArrayElements(data, expected, testDesc) {
  const actual = squareRootForArrayElements(data);
  const fragmentMsg = composedMessage(data, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testSquareRootForArrayElements([1, 4, 9, 16], [1, 2, 3, 4], `
    simple square root`));
  console.log(testSquareRootForArrayElements([100, 900], [10, 30], `
    simple square root`));
  console.log(testSquareRootForArrayElements([50, 75], [7.07106781187, 8.66025403784], `
    square root which'll answer in decimal`));
}

main();