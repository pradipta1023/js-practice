
function composedMessage(number, actualString) {
  const givenNumberMessage = "\nGiven String:" + number;
  return givenNumberMessage + "\n\nOutput:" + actualString;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\nExpected output:" + expectedString;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testTrim(number, expectedString) {
  const actualString = trim(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testTrim("  Hello  ", "Hello"));
  console.log(testTrim("\n\tHello  ", "Hello"));
  console.log(testTrim("\n\tHello\n\t", "Hello"));
  console.log(testTrim("\nHel lo\t", "Hel lo"));
  console.log(testTrim("\n\tHello\n\t", "Hello"));
  console.log(testTrim("\n\n", ""));
  console.log(testTrim("\t\t", ""));
  console.log(testTrim(" ", ""));
}

main();