
function composedMessage(text, target, actualIndex) {
  const givenStringMessage = "\nGiven string: " + text;
  const targetMessage = "\ntarget character: " + target;
  const outputMessage = "\n\nActual output:" + actualIndex;
  return givenStringMessage + targetMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedIndex) {
  const expectation = "\nExpected index:" + expectedIndex;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testFindIndex(text, target, expectedIndex) {
  const actualIndex = findIndex(text, target);
  const fragmentMessage = composedMessage(text, target, actualIndex);
  const isSame = actualIndex === expectedIndex;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedIndex);
  return message;
}
