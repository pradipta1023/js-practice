function quotient(dividend, divisor) {
  if (dividend === divisor) {
    return 1;
  }
  if (dividend <= divisor) {
    return 0;
  }
  return 1 + quotient(dividend - divisor, divisor);
}

function composedMessage(multiplier, multiplicand, actualString) {
  const inputMessage = `\t|Input : [${multiplier} , ${multiplicand}]\t|`;
  const outputMessage = `\n\t|\t\t\t|\n\t|Output : ${actualString}\t\t|`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString, purpose) {
  const expectation = "\n\t|Expected output :" + expectedString + "\t|";
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return messageForPassedCase(purpose);
  }

  return failedCase;
}

function messageForPassedCase(purpose) {
  return `✅ ${purpose}`;
}

function testQuotient(dividend, divisor, expectedString, purpose) {
  const result = quotient(dividend, divisor);
  const fragmentMessage = composedMessage(dividend, divisor, result);
  const isSame = result === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString, purpose);
  return message;
}

function main() {
  console.log(testQuotient(10, 2, 5, "Divide 10 with 2"));
  console.log(testQuotient(5, 2, 2, "Divide 5 with 2"));
  console.log(testQuotient(100, 5, 20, "Divide 100 with 5"));
  console.log(testQuotient(20, 4, 5, "Divide 20 with 4"));
  console.log(testQuotient(23, 5, 3, "Divide 23 with 5"));
}

main();