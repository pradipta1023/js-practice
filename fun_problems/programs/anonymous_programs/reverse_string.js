function reverseString(string, index) {
  if(index === -1 || string.length === 0) {
    return "";
  }
  return string[index] + reverseString(string, index - 1);
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

function testReverseString(string, expectedString) {
  const actualString = reverseString(string, string.length - 1);
  const fragmentMessage = composedMessage(string, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testReverseString("aba", "aba"));
  console.log(testReverseString("hello", "olleh"));
  console.log(testReverseString("race", "ecar"));
  console.log(testReverseString("", ""));
}

main();