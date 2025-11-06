function nthFibonacciTerm(n) {
  if (n === 1 || n === 0) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return nthFibonacciTerm(n - 1) + nthFibonacciTerm(n - 2);
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

function testNthFibonacciTerm(number, expectedString) {
  const actualString = nthFibonacciTerm(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testNthFibonacciTerm(0, 0));
  console.log(testNthFibonacciTerm(1, 0));
  console.log(testNthFibonacciTerm(2, 1));
  console.log(testNthFibonacciTerm(3, 1));
  console.log(testNthFibonacciTerm(4, 2));
  console.log(testNthFibonacciTerm(5, 3));
  console.log(testNthFibonacciTerm(6, 5));
  console.log(testNthFibonacciTerm(7, 8));
  console.log(testNthFibonacciTerm(8, 13));
  console.log(testNthFibonacciTerm(9, 21));
  console.log(testNthFibonacciTerm(10, 34));
}

main();