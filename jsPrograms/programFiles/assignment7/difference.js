// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function difference(array1, array2) {
  const missingElements = [];
  for (let index = 0; index < array1.length; index++) {
    if (!includes(array2, array1[index])) {
      missingElements.push(array1[index]);
    }
  }

  return missingElements;
}

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
  const actual = difference(array, target);
  const fragmentMsg = composedMessage(array, target, actual);
  const isSame = areDeepEqual(actual, expected);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testDifference([1, 2, 3], [2, 3, 4], [1], "simple check"));
  console.log(testDifference([1, 2, 3], [], [1, 2, 3], "Empty array2"));
  console.log(testDifference([], [1, 2, 4, 6], [], "Empty array1"));
  console.log(testDifference([], [], [], "both empty"));
  console.log(testDifference([1, [2, 3]], [1, [2, 3]], [], "both empty"));
}

main();