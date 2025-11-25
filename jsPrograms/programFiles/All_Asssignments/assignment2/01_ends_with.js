/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubStringAt(string, subString, startIndex) {
  for (let index = startIndex; index < string.length; index++) {
    if (string[index] !== subString[index - startIndex]) {
      return false;
    }
  }

  return true;
}

function endsWith(string, substring) {
  const startIndex = string.length - substring.length;
  return isSubStringAt(string, substring, startIndex);
}

function composedMessage(givenString, subString, actualResult) {
  const givenStringMessage = "\nGiven string:" + givenString;
  const subStringMessage = "\nsubString:" + subString;
  const outputMessage = "\n\nActual output:" + actualResult;
  return givenStringMessage + subStringMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected output:" + expectedResult;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testEndsWith(givenString, subString, expectedResult) {
  const result = endsWith(givenString, subString);
  const fragmentMessage = composedMessage(givenString, subString, result);
  const isSame = result === expectedResult;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedResult);
  return message;
}

function main() {
  console.log(testEndsWith("hello", "li", false));
  console.log(testEndsWith("hello", "lo", true));
  console.log(testEndsWith("hello", "o", true));
  console.log(testEndsWith("hello hi", "o", false));
  console.log(testEndsWith("hello hi", "hello", false));
  console.log(testEndsWith("hello hi", "hi", true));
}

main();