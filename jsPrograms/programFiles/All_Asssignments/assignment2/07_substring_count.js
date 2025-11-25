/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

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

function occurrenceOfString(string, subString) {
  let occurrence = 0;
  if (subString.length === 0) {
    return 0;
  }

  for (let index = 0; index < string.length; index++) {
    if (isSubStringAt(string, subString, index)) {
      occurrence++;
    }
  }
  return occurrence;
}

function occurrences(string, substring) {
  return occurrenceOfString(string, substring);
}

function composedMessage(string, subString, actualOutput) {
  const givenStringMessage = "\nGiven string:" + subString;
  const givenSubStringMessage = "\nGiven sub string:" + string;
  const outputMessage = "\n\nOutput:" + actualOutput;
  return givenStringMessage + givenSubStringMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedOutput) {
  const expectation = "\nExpected string:" + expectedOutput;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testOccurrences(string, subString, expectedOutput) {
  const actualOutput = occurrences(string, subString);
  const fragmentMessage = composedMessage(string, subString, actualOutput);
  const isSame = actualOutput === expectedOutput;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedOutput);
  return message;
}

function main() {
  console.log(testOccurrences('hello world', 'll', 1));
  console.log(testOccurrences('hello world', 'l', 3));
  console.log(testOccurrences('hello world', 'world', 1));
  console.log(testOccurrences('hello world', 'zebra', 0));
  console.log(testOccurrences('', 'zebra', 0));
  console.log(testOccurrences('Hello', '', 0));
}

main();