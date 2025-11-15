const largeString = function (data, length = 5) {
  return data.length > length;
}

const isOdd = function (data) {
  return data % 2 !== 0;
}

const filter = function (data, predicate) {
  const resultArray = [];

  for (const element of data) {
    if (predicate(element)) {
      resultArray.push(element);
    } 
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

function testFilter(data, predicate, expected, testDesc) {
  const actual = filter(data, predicate);
  const fragmentMsg = composedMessage(data, actual);
  const isSame = areDeepEqual(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function testOddNumbers() {
  console.log(testFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], isOdd, [1, 3, 5, 7, 9], `
    odds from 1 - 10`));
  console.log(testFilter([0, 5, 0, 7], isOdd, [5, 7], `
    for zero`));
}

function testLargeString() {
  console.log(testFilter(["Hello", "abcdef", "America"], largeString, ["abcdef", "America"], `
    simple test`));
  console.log(testFilter(["false", "yes", "no"], largeString, [], `
    All are less than given threshold`));
  console.log(testFilter(["kingdom", "notebook", "railway"], largeString, ["kingdom", "notebook", "railway"], `
    All are greater than given threshold`));
}

function main() {
  testOddNumbers();
  testLargeString();
}

main();