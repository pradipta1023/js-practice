const isOdd = (number) => {
  return number % 2 !== 0;
};

const isGreaterThan100 = (number) => {
  return number > 100;
};

const some = function (data, predicate) {
  for (const element of data) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
};

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

function testSome(data, predicate, expected, testDesc) {
  const actual = some(data, predicate);
  const fragmentMsg = composedMessage(expected, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function testAtLeastOneOdd() {
  console.log(testSome(
    [3, 3, 3, 5],
    isOdd,
    true,
    `
    all odds`,
  ));
  console.log(testSome(
    [2, 4, 6, 8, 10],
    isOdd,
    false,
    `
    all evens`,
  ));
  console.log(testSome(
    [2, 4, 6, 8, 10, 3],
    isOdd,
    true,
    `
    single odd others even`,
  ));
}

function testGreaterThan100() {
  console.log(testSome(
    [100, 200],
    isGreaterThan100,
    true,
    `
    all greater than 100`,
  ));
  console.log(testSome(
    [2, 4, 6, 8, 10],
    isGreaterThan100,
    false,
    `
    all less than 100`,
  ));
}

function main() {
  testAtLeastOneOdd();
  testGreaterThan100();
}

main();
