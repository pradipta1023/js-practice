// Given an array and a value, returns true if the value is present in
//  the array, else false.
// Examples:
// includes([1, 2, 3], 2) => true
// includes([1, 2, 3], 4) => false
// includes([], 1) => false
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

function includes(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (areDeepEqual(array[index], target)) {
      return true;
    }
  }

  return false;
}

function composedMessage(array, target, actual) {
  const inputMessage = `\t|Input : [[${array}], [${target}]]`;
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

function testDifference(array, target, expected, testDesc) {
  const actual = includes(array, target, 0);
  const fragmentMsg = composedMessage(array, target, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testDifference([1, 2, 3], 2, true, "simple check"));
  console.log(testDifference([1, 2, 3], 4, false, "Not present"));
  console.log(testDifference([1, 2, [3]], [3], true, "for multi")); 
  console.log(testDifference([1, 2, [3, 4]], [3], true, "for multi")); 
  console.log(testDifference([], [], false, "Empty check")); 
}

main();