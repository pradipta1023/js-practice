const squareRootOf = function (data) {
  return Math.sqrt(data);
}

const halfOf = function (data) {
  return data / 2;
}

function convertToUpperCase(data) {
  return data.toUpperCase();
}

const map = function (data, predicate) {
  const resultArray = [];

  for (const element of data) {
    resultArray.push(predicate(element));
  }

  return resultArray;
}


function isEqual(x, y) {
  return x === y;
}

function areDeepEqual(actual, expected, index) {
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

function testMap(data, predicate, expected, testDesc) {
  const actual = map(data, predicate);
  const fragmentMsg = composedMessage(data, actual);
  const isSame = areDeepEqual(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function testSquareRoot() {
  console.log(testMap([1, 4, 9, 16], squareRootOf, [1, 2, 3, 4], `
    simple square root`));
  console.log(testMap([100, 900], squareRootOf, [10, 30], `
    simple square root`));
}

function testConvertHalfOfValue() {
  console.log(testMap([1, 2, 3, 4, 5], halfOf, [0.5, 1, 1.5, 2, 2.5], `
    simple test`));
  console.log(testMap([1, 3, 5, 7], halfOf, [0.5, 1.5, 2.5, 3.5], `
    odd numbers`));
  console.log(testMap([0, 2, 4, 6, 8], halfOf, [0, 1, 2, 3, 4], `
    even numbers`));
}

function testConvertToUpperCase() {
  console.log(testMap(["false", "yes", "no"], convertToUpperCase, ["FALSE", "YES", "NO"], `
    For all lowercase`));
  console.log(testMap(["kingdom", "NOTEBOOK", "railway"], convertToUpperCase, ["KINGDOM", "NOTEBOOK", "RAILWAY"], `
    for mix of uppercase and lowercase`));
  console.log(testMap(["", "", ""], convertToUpperCase, ["", "", ""], `
    for empty string`));
}

function main() {
  testSquareRoot();
  testConvertHalfOfValue();
  testConvertToUpperCase();
}

main();