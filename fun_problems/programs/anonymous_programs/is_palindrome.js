function isPalindrome(string, leftPointer, rightPointer) {
  if(string.length === 0) {
    return -1;
  }
  if (string[leftPointer] !== string[rightPointer]) {
    return false;
  }
  if (leftPointer >= rightPointer) {
    return true;
  }
  return isPalindrome(string, leftPointer + 1, rightPointer - 1);
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

function testIsPalindrome(string, expectedString) {
  const actualString = isPalindrome(string, 0, string.length - 1);
  const fragmentMessage = composedMessage(string, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testIsPalindrome("aba", true));
  console.log(testIsPalindrome("abcdba", false));
  console.log(testIsPalindrome("abcba", true));
  console.log(testIsPalindrome("abba", true));
  console.log(testIsPalindrome("", -1));
  console.log(testIsPalindrome("abc", false));
  console.log(testIsPalindrome("121", true));
  console.log(testIsPalindrome("123", false));
  console.log(testIsPalindrome("racecar", true));
}

main();