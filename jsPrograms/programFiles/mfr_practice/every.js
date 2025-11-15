const isNegative = (number) => {
  return number > 0;
}

const largeString = (string) => {
  return string.length > 3;
}

const every = function(data, predicate) {
  for (const element of data) {
    if (!predicate(element)) {
      return false;
    }
  }

  return true;
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

function testEvery(data, predicate, expected, testDesc) {
  const actual = every(data, predicate);
  const fragmentMsg = composedMessage(expected, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function testNotNegative() {
  console.log(testEvery([100, 200], isNegative, true, `
    all positive`));
  console.log(testEvery([-1, -2, -3], isNegative, false, `
    all negative`));
  console.log(testEvery([1, 2, 5, 10, -1, -2, -3], isNegative, false, `
    mix check`));
}

function testLargeString() {
  console.log(testEvery(["abcd", "abcde"], largeString, true, `
    all more than 3`));
  console.log(testEvery(["ab", "no", "yes"], largeString, false, `
    all less than 3`));
  console.log(testEvery(["India", "America", "ab", "no", "yes"], largeString, false, `
    mix check`));
}

function main() {
  testNotNegative();
  testLargeString();
}

main();