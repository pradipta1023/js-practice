function firstNonRepeatedChar(string, index) {
  if (index === string.length) {
    return "";
  }
  if (noOfDuplicates(string, 0, string[index]) === 1) {
    return string[index];
  }
  return firstNonRepeatedChar(string, index + 1);
}

function noOfDuplicates(string, index, char) {
  if (index === string.length) {
    return 0;
  }
  if (string[index] === char) {
    return 1 + noOfDuplicates(string, index + 1, char);
  }
  return noOfDuplicates(string, index + 1, char);
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

function testfirstNonRepeatedChar(string, expected, testDesc) {
  const actual = firstNonRepeatedChar(string, 0);
  const fragmentMsg = composedMessage(string, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testfirstNonRepeatedChar("swiss", "w", "2nd char"));
  console.log(testfirstNonRepeatedChar("aabbcc", "", "all repeated"));
  console.log(testfirstNonRepeatedChar("abcabcde", "d", "char at lenght - 1"));
  console.log(testfirstNonRepeatedChar("a", "a", "for single character"));
  console.log(testfirstNonRepeatedChar("", "", "for empty string"));
  console.log(testfirstNonRepeatedChar("akdsjkdja", "s", "for middle char"));
  console.log(testfirstNonRepeatedChar("aabbc", "c", "non repeating at end"));
  console.log(testfirstNonRepeatedChar("abcd", "a", "first unique"));
}

main();