function isOdd(numberToCheck) {
  return numberToCheck % 2 !== 0;
}

function selectOdds(numbers) {
  const odds = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      odds.push(numbers[index]);
    }
  }

  return odds;
}

function isSameResult(actual, expected, index) {
  if (index === actual.length) {
    return true;
  }
  if (actual.length !== expected.length) {
    return false;
  }
  if (actual[index] !== expected[index]) {
    return false;
  }
  return isSameResult(actual, expected, index + 1);
}

function composedMessage(numbers, actual) {
  const inputMessage = `\t|Input : [${numbers}]`;
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

function testSelectOdds(numbersToFindOdd, expected, testDesc) {
  const actual = selectOdds(numbersToFindOdd);
  const fragmentMsg = composedMessage(numbersToFindOdd, actual);
  const isSame = isSameResult(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testSelectOdds([1, 2, 5, 8, 9], [1, 5, 9], "simple check"));
  console.log(testSelectOdds([1, 3, 5, 7, 9], [1, 3, 5, 7, 9], "For all odd"));
  console.log(testSelectOdds([2, 4, 6, 8], [], "For all evens"));
  console.log(testSelectOdds([], [], "For empty array"));
}

main();