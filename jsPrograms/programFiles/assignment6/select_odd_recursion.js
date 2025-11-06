// Given an array of numbers return a new array containing only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.
function selectOdds(numbers) {
  return oddsInArray(numbers, 0, []);
}

function oddsInArray(numbers, index, oddsArray) {
  if(index === numbers.length) {
    return oddsArray;
  }
  if(numbers[index] % 2 !== 0) {
    oddsArray[oddsArray.length] = numbers[index];
  }
  return oddsInArray(numbers, index + 1, oddsArray)
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

function testSelectOdds(numbers, expected, testDesc) {
  const actual = selectOdds(numbers);
  const fragmentMsg = composedMessage(numbers, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testSelectOdds([1, 2, 5, 8, 9], [1, 5, 9], "simple check"));
  console.log(testSelectOdds([1, 3, 5, 7, 9], [1, 3, 5, 7, 9], "For all odds"));
  console.log(testSelectOdds([2, 4, 6, 8], [], "For all evens"));
  console.log(testSelectOdds([], [], "For empty array"));
}

main();