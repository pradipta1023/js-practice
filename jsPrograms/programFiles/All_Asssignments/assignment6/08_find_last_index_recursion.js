// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  return findIndex(array, element, array.length - 1);
}

function findIndex(array, element, index) {
  if (index === -1) {
    return -1;
  }
  if (array[index] === element) {
    return index;
  }
  return findIndex(array, element, index - 1);
}

function composedMessage(array1, element, actual) {
  const inputMessage = `\t|Input : [${array1}, ${element}]`;
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

function testFindLastIndex(array1, element, expected, testDesc) {
  const actual = findLastIndex(array1, element);
  const fragmentMsg = composedMessage(array1, element, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);

  return message;
}

function main() {
  console.log(testFindLastIndex(["apple", "cake", "tea", "tea"], "tea", 3));
  console.log(testFindLastIndex(["apple", "cake", "tea", "tea"], "apple", 0));
  console.log(testFindLastIndex(["apple", "tea", "cake", "apple"], "apple", 3));
  console.log(testFindLastIndex(["apple", "cake", "fruit"], "fruit", 2));
  console.log(testFindLastIndex(["apple", "cake", "cake"], "fruit", -1));
}

main();