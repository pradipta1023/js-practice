function multiply(multiplier, multiplicand) {
  if (multiplier === 0) {
    return 0;
  }
  return multiplicand + multiply(multiplier - 1, multiplicand);
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

function testMultiply(multiplier, multiplicand, expectedString, purpose) {
  const result = multiply(multiplier, multiplicand);
  const fragmentMessage = composedMessage(multiplier, multiplicand, result);
  const isSame = result === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString, purpose);
  return message;
}

function main() {
  console.log(testMultiply(2, 5, 10, "multiply 5 with 2"));
  console.log(testMultiply(3, 5, 15, "multiply 5 with 3"));
  console.log(testMultiply(2, 6, 12, "multiply 6 with 2"));
  console.log(testMultiply(1, 7, 7, "multiply 1 with 7"));
}

main();