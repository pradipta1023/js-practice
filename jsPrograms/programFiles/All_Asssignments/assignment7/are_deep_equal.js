// Deep equality means both arrays contain the same elements in the same order,
// including any nested arrays, which must also be deeply equal.
// Examples:
// areDeepEqual([1, 2, 3], [1, 2, 3]) => true
// areDeepEqual([1, [2, 3]], [1, [2, 3]]) => true
// areDeepEqual([1, [2, 3]], [1, [3, 2]]) => false
// areDeepEqual([1, 2], [1, 2, 3]) => false
// areDeepEqual([1, [2, [3]]], [1, [2, [3]]]) => true
// areDeepEqual([1, [2, [3]]], [1, [2, 3]]) => false
// do not modify input parameters
function isArray(value) {
  return typeof value === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function composedMessage(array1, array2, actual) {
  const inputMessage = `\t|Input : [[${array1}], [${array2}]]`;
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

function testAreDeepEqual(array1, array2, expected, testDesc) {
  const actual = areDeepEqual(array1, array2, 0);
  const fragmentMsg = composedMessage(array1, array2, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testAreDeepEqual([1, 2, 3], [1, 2, 3], true, "simple check"));
  console.log(testAreDeepEqual([[2], 3], [[2], 3], true, "simple check"));
  console.log(testAreDeepEqual([[1], [2], 3], [[1], [2], 3], true));
  console.log(testAreDeepEqual([], [], true, "Empty"));
  console.log(testAreDeepEqual([[3], [5, 7]], [[3], [5, 7]], true, "multi"));
  console.log(testAreDeepEqual([[3], [5, 7]], [[3], [5, 7, undefined]], false, "multi"));
  console.log(testAreDeepEqual([[3], [5, 7, undefined]], [[3], [5, 7, undefined]], false, "multi"));
  console.log(testAreDeepEqual([[3], [5, 7]], [[3], 5, 7], false, "difrence"));
  console.log(testAreDeepEqual([[3], [5, 7]], [], false, "Empty"));
  console.log(testAreDeepEqual([[3], [5, 7],6], [[3], [5,7],7], false, "Empty"));
  console.log(testAreDeepEqual("abc", ['a', 'b', 'c'], false, "Empty"));
}

main();