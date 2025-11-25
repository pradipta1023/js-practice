function reverse(string) {
  return reverseOfString(string, "", string.length - 1);
}

function reverseOfString(string, reverseString, length) {
  if (string === "") {
    return "";
  }
  reverseString = reverseString + string[length];
  if (length === 0) {
    return reverseString;
  }
  return reverseOfString(string, reverseString, length - 1);
}

function composedMessage(primeCandidate, actualString) {
  const inputMessage = `\t|Input : [${primeCandidate}]\t|`;
  const outputMessage = `\n\t|\t\t\t|\n\t|Output : ${actualString}\t\t|`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\n\t|Expected output : " + expectedString + "|";
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

function testReverse(number, expectedString) {
  const actualString = reverse(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testReverse("aba", "aba"));
  console.log(testReverse("", ""));
  console.log(testReverse("a", "a"));
  console.log(testReverse("abcba", "abcba"));
  console.log(testReverse("cba", "abc"));
  console.log(testReverse("123", "321"));
  console.log(testReverse("121", "121"));
}

main();