// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters
function mapLengths(words) {
  return lengthOfWordsInArray(words, 0, []);
}

function lengthOfWordsInArray(words, index, lengthArray) {
  if (index === words.length) {
    return lengthArray;
  }
  lengthArray[lengthArray.length] = words[index].length;
  return lengthOfWordsInArray(words, index + 1, lengthArray);
}

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
    return messageForPassedCase(testDesc);
  }

  return failedCase;
}

function messageForPassedCase(testDesc) {
  return `✅ ${testDesc}`;
}

function testMapLengths(words, expected, testDesc) {
  const actual = mapLengths(words);
  const fragmentMsg = composedMessage(words, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testMapLengths(["Apple", "cat", "four"], [5, 3, 4], "Simple check"));
  console.log(testMapLengths(["Fruit", "Flower", "Number"], [5, 6, 6], "Simple check"));
  console.log(testMapLengths(["House", "Name", "Road"], [5, 4, 4], "Simple check"));
  console.log(testMapLengths([], [], "Empty check"));
}

main();