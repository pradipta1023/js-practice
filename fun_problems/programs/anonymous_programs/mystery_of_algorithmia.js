function mysteryOfNumbers(n) {
  if(n === 0) {
    return -1;
  }
  if (n === 1) {
    return 0;
  }
  if (!(n % 2)) {
    return 1 + mysteryOfNumbers(n / 2);
  }
  if (!(n % 3)) {
    return 1 + mysteryOfNumbers(n / 3);
  }
  return 1 + mysteryOfNumbers(n - 1);
}

function composedMessage(nthTerm, actualString) {
  const inputMessage = `\t|Input : [${nthTerm}]`;
  const outputMessage = `\n\t|\n\t|Output : ${actualString}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\n\t|Expected output : " + expectedString;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return messageForPassedCase(expectedString);
  }

  return failedCase;
}

function messageForPassedCase(expectedString) {
  return `✅ Expected output : ${expectedString}`;
}

function testMysteryOfNumbers(number, expectedString) {
  const actualString = mysteryOfNumbers(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testMysteryOfNumbers(10, 4));
  console.log(testMysteryOfNumbers(1, 0));
  console.log(testMysteryOfNumbers(0, -1));
}

main();