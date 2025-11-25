function isSubString(string, otherString) {
  if (otherString.length === 0) {
    return false;
  }
  return checkSubstring(string, otherString, 0);
}

function checkSubstring(string, subString, index) {
  if (string.length === 0) {
    return false;
  }
  if (index === string.length) {
    return false;
  }
  if (isSubStringAt(string, subString, index, 0)) {
    return true;
  }
  return checkSubstring(string, subString, index + 1);
}

function isSubStringAt(string, subString, startIndex, index) {
  if (index === subString.length) {
    return true;
  }
  if (string[index + startIndex] !== subString[index]) {
    return false;
  }
  return isSubStringAt(string, subString, startIndex, index + 1);
}

function composedMessage(string, subString, actualString) {
  const givenMultiplier = "\nstring:" + string;
  const givenMultiplicand = "\nSubstring:" + subString;
  return givenMultiplier + givenMultiplicand + "\n\nOutput:" + actualString;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\nExpected output:" + expectedString;
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

function testIsSubString(string, otherString, expectedString) {
  const result = isSubString(string, otherString);
  const fragmentMessage = composedMessage(string, otherString, result);
  const isSame = result === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testIsSubString("", "", false));
  console.log(testIsSubString("", "ello", false));
  console.log(testIsSubString("Hello", "ello", true));
  console.log(testIsSubString("", "ello", false));
  console.log(testIsSubString("abc", "c", true));
  console.log(testIsSubString("hello", "", false));
  console.log(testIsSubString("abc", "a", true));
}

main();