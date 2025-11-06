// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([1, [22] 3], [1, [22], 3]) => true
// do not modify input parameters
function areEqual(array1, array2) {
  return isSameArray(array1, array2, 0);
}

function isSameArray(actual, expected, index) {
  if (actual.length !== expected.length) {
    return false;
  }
  if (index === actual.length) {
    return true;
  }
  if (actual[index] !== expected[index]) {
    return false;
  }
  return isSameArray(actual, expected, index + 1);
}

function composedMessage(array1, array2, actual) {
  const inputMessage = `\t|Input : [${array1}, ${array2}]`;
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

function testAreEqual(array1, array2, expected, testDesc) {
  const actual = areEqual(array1, array2);
  const fragmentMsg = composedMessage(array1, array2, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);

  return message;
}

function main() {
  console.log(testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true, "Simple array"));
  console.log(testAreEqual([1, 2, 3], [1, 2, 3, 4], false, "Differ length"));
  console.log(testAreEqual([1, 2, 3], [1, 3, 2], false, "Different Value"));
  console.log(testAreEqual([], [], true,"Empty array" ));
  console.log(testAreEqual([], [3,5], false,"Empty array" ));
}

main();