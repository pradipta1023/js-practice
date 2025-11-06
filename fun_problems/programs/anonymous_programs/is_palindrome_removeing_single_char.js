function isPalindrome(string, leftPointer, rightPointer) {
  if (string[leftPointer] !== string[rightPointer]) {
    return false;
  }
  if (leftPointer >= rightPointer) {
    return true;
  }
  return isPalindrome(string, leftPointer + 1, rightPointer - 1);
}


function isPalindromeAfterRemoving(string, index) {
  if (string.length === 0) {
    return true;
  }
    if (isPalindrome(string, 0, string.length - 1)) {
      return true;
    }
  if (index === string.length) {
    return false;
  }
  const slicedString = string.slice(0, index) + string.slice(index + 1, string.length);
  if (isPalindrome(slicedString, 0, slicedString.length - 1)) {
    return true;
  }
  return isPalindromeAfterRemoving(string, index + 1);
}


function composedMessage(string, actual) {
  const inputMessage = `\t|Input : [${string}]`;
  const outputMessage = `\n\t|\n\t|Output : ${actual}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentMsg, expected, testDesc) {
  const expectation = "\n\t|Expected output : " + expected;
  const emojiForFailedCase = `----------\n❌ ${testDesc}\n`;
  const failedCase = emojiForFailedCase + fragmentMsg + expectation;

  if (isSameResult) {
    return messageForPassedCase(testDesc);
  }

  return failedCase;
}

function messageForPassedCase(testDesc) {
  return `✅ ${testDesc}`;
}

function testisPalindromeAfterRemoving(string, expected, testDesc) {
  const actual = isPalindromeAfterRemoving(string, 0);
  const fragmentMsg = composedMessage(string, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testisPalindromeAfterRemoving("aaa", true, "palindrome string"));
  console.log(testisPalindromeAfterRemoving("abca", true, "by removing one char"));
  console.log(testisPalindromeAfterRemoving("racfcar", true, "by removing middle char"));
  console.log(testisPalindromeAfterRemoving("Umbrella", false, "can't convert to palindrome"));
  console.log(testisPalindromeAfterRemoving("a", true, "single character always palindrome"));
  console.log(testisPalindromeAfterRemoving("deeee", true, "removal at first index"));
  console.log(testisPalindromeAfterRemoving("", true, "empty string is palindrome"));
}

main();