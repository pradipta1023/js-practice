// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function findIndex(array, element) {
  return findIndex(array, element, 0);
}

function findIndex(array, element, index) {
  if (index === array.length) {
    return -1;
  }
  if (array[index] === element) {
    return index;
  }
  return findIndex(array, element, index + 1);
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

function testFindIndex(array1, element, expected, testDesc) {
  const actual = findIndex(array1, element);
  const fragmentMsg = composedMessage(array1, element, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);

  return message;
}

function main() {
  console.log(testFindIndex(["apple", "cake", "tea", "tea"], "tea", 2));
  console.log(testFindIndex(["apple", "cake", "tea", "tea"], "apple", 0));
  console.log(testFindIndex(["apple", "cake", "tea", "cake"], "apple", 0));
  console.log(testFindIndex(["apple", "cake", "cake", "fruit"], "fruit", 3));
  console.log(testFindIndex(["apple", "cake", "cake"], "fruit", -1));
}

main();