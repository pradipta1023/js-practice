const isEqual = (x, y) => x === y;

function areDeepEqual(actual, expected, index) {
  if (!Array.isArray(actual)) {
    return actual === expected;
  }
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

function testGeneratePattern(style, dimensions, expected, testDesc) {
  const actual = generatePattern(style, dimensions, 0);
  const fragmentMsg = composedMessage(style, dimensions, actual);
  const isSame = areDeepEqual(actual, expected);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}
