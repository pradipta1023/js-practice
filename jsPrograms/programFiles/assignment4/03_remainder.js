function remainder(dividend, divisor) {
  if (dividend === divisor) {
    return 0;
  }
  if (dividend <= divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function composedMessage(dividend, divisor, actualString) {
  const inputMessage = `\t|Input : [${dividend} , ${divisor}]\t|`;
  const outputMessage = `\n\t|\t\t\t|\n\t|Output : ${actualString}\t\t|`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\n\t|Expected output :" + expectedString + "\t|";
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

function testRemainder(dividend, divisor, expectedString) {
  const result = remainder(dividend, divisor);
  const fragmentMessage = composedMessage(dividend, divisor, result);
  const isSame = result === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testRemainder(10, 2, 0));
  console.log(testRemainder(5, 2, 1));
  console.log(testRemainder(100, 5, 0));
  console.log(testRemainder(20, 4, 0));
  console.log(testRemainder(23, 5, 3));
}

main();