/*
  Implement the below function that tells if a string is substring of another 
  string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubStringAt(string, subString, startIndex) {
  for (let index = 0; index < subString.length; index++) {
    if (string[index + startIndex] !== subString[index]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (subString.length === 0) {
    return false;
  }

  for (let index = 0; index < string.length; index++) {
    if (isSubStringAt(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function composedMessage(string, subString, actualOutput) {
  const givenStringMessage = "\nGiven string:" + string;
  const givenSubStringMessage = "\nGiven sub string:" + subString;
  const outputMessage = "\n\nOutput:" + actualOutput;
  return givenStringMessage + givenSubStringMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedOutput) {
  const expectation = "\nExpected Output:" + expectedOutput;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testIsSubString(string, subString, expectedOutput) {
  const actualOutput = isSubstring(string, subString);
  const fragmentMessage = composedMessage(string, subString, actualOutput);
  const isSame = actualOutput === expectedOutput;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedOutput);
  return message;
}

function main() {
  console.log(testIsSubString('hello', 'hello world', false));
  console.log(testIsSubString('hello world', '', false));
  console.log(testIsSubString('hello world', 'worl', true));
  console.log(testIsSubString('hello world', ' ', true));
}

main();