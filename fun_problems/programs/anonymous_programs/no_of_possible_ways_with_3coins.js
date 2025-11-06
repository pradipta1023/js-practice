function countWays(n) {
  if (n === 0) {
    return 1;
  }
  if(n < 0) {
    return 0;
  }
  return  countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
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

function testcountWays(string, expectedString) {
  const actualString = countWays(string, 0, string.length - 1);
  const fragmentMessage = composedMessage(string, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testcountWays(0, 1));
  console.log(testcountWays(1, 1));
  console.log(testcountWays(2, 2));
  console.log(testcountWays(3, 4));
  console.log(testcountWays(4, 7));
}

main();