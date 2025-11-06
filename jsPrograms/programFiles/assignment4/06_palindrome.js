function isPalindrome(palindromeCandidate) {
  const length = palindromeCandidate.length;
  const reversedString = reverseOfString(palindromeCandidate, "", length - 1);
  if (reversedString === palindromeCandidate) {
    return true;
  }
  return false;
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

function testIsPalindrome(number, expectedString) {
  const actualString = isPalindrome(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testIsPalindrome("aba", true));
  console.log(testIsPalindrome("", true));
  console.log(testIsPalindrome("a", true));
  console.log(testIsPalindrome("abcba", true));
  console.log(testIsPalindrome("cba", false));
  console.log(testIsPalindrome("123", false));
  console.log(testIsPalindrome("121", true));
}

main();