// function generateComma(currentValue, endOfRange) {
//   return currentValue !== endOfRange ? ',' : '';
// }

function separateWithCommas(startOfRange, endOfRange) {
  let commaSeparatedString = startOfRange;

  for (let item = startOfRange + 1; item <= endOfRange; item++) {
    commaSeparatedString = commaSeparatedString + ',' + item;
  }

  return commaSeparatedString;
}

function composedMessage(startOfRange, endOfRange, actualOutput) {
  const startRangeMessage = "\nStart of range:" + startOfRange;
  const endRangeMessage = "\nEnd of range:" + endOfRange;
  const outputMessage = "\n\nOutput:" + actualOutput;
  return startRangeMessage + endRangeMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedOutput) {
  const expectation = "\nExpected output:" + expectedOutput;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testSeparateWithCommas(startOfRange, endOfRange, expectedOutput) {
  const actualOutput = separateWithCommas(startOfRange, endOfRange);
  const fragmentMessage = composedMessage(startOfRange, endOfRange, actualOutput);
  const isSame = actualOutput === expectedOutput;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedOutput);
  return message;
}

function testAll() {
  console.log(testSeparateWithCommas(1, 2, "1,2"));
  console.log(testSeparateWithCommas(1, 4, "1,2,3,4"));
  console.log(testSeparateWithCommas(1, 3, "1,2,3"));
  console.log(testSeparateWithCommas(1, 5, "1,2,3,4,5"));
  console.log(testSeparateWithCommas(5, 15, "5,6,7,8,9,10,11,12,13,14,15"));
}

testAll();
