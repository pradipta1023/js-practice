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
    return successMessage(testDesc);
  }

  return failedCase;
}

function successMessage(testDesc) {
  return `✅ ${testDesc}`;
}


function testEvenOddCount(numbers, expected, testDesc) {
  const actual = evenOddCount(numbers, 0, [[0], 0]);
  const fragmentMsg = composedMessage(numbers, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testEvenOddCount([1, 3, 5, 7, 9], [[0], 5], "For all odds"));
  console.log(testEvenOddCount([1, 3, 5, 7, 9], [[0], 5], "For all odds"));
  console.log(testEvenOddCount([2, 4, 6, 8, 10], [[5], 0], "For all evens"));
  console.log(testEvenOddCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [[5], 5], "For mixed odd evens"));
}

main();