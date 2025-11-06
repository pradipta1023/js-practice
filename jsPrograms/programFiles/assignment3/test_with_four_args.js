function composedMessage(text, start, end, actualOutput) {
  const givenTextMessage = "\nGiven text:" + text;
  const startMessage = "\nGiven start:" + start;
  const endMessage = "\nGiven end: " + end;
  const outputMessage = "\n\nOutput:" + actualOutput;
  return givenTextMessage + startMessage + endMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedOutput) {
  const expectation = "\nExpected string:" + expectedOutput;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testSlice(text, start, end, expectedOutput) {
  const actualOutput = slice(text, start, end);
  const fragmentMessage = composedMessage(text, start, end, actualOutput);
  const isSame = actualOutput === expectedOutput;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedOutput);
  return message;
}