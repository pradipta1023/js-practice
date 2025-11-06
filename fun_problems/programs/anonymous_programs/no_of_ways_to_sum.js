function noOfWaysToSum(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return noOfWaysToSum(n - 1) + noOfWaysToSum(n - 3) + noOfWaysToSum(n - 4);
}

function composedMessage(stringToCompress, actualString) {
  const inputMessage = `\t|Input : [${stringToCompress}]`;
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

function testnoOfWaysToSum(n, expectedString) {
  const actualString = noOfWaysToSum(n);
  const fragmentMessage = composedMessage(n, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testnoOfWaysToSum(4, 4));
  console.log(testnoOfWaysToSum(3, 2));
  console.log(testnoOfWaysToSum(2, 1));
  console.log(testnoOfWaysToSum(1, 1));
  console.log(testnoOfWaysToSum(5, 6));
  console.log(testnoOfWaysToSum(6, 9));
}

main();