/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

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

function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (isSubStringAt(text, target, index)) {
      return index;
    }
  }

  return -1;
}

function composedMessage(text, target, actualIndex) {
  const givenStringMessage = "\nGiven string: " + text;
  const targetMessage = "\ntarget character: " + target;
  const outputMessage = "\n\nActual output:" + actualIndex;
  return givenStringMessage + targetMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedIndex) {
  const expectation = "\nExpected index:" + expectedIndex;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testFindIndex(text, target, expectedIndex) {
  const actualIndex = findIndex(text, target);
  const fragmentMessage = composedMessage(text, target, actualIndex);
  const isSame = actualIndex === expectedIndex;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedIndex);
  return message;
}

function main() {
  console.log(testFindIndex("hello world", "o", 4));
  console.log(testFindIndex('repeating iiiiiiii', 'i', 6));
  console.log(testFindIndex('not found', 'z', -1));
  console.log(testFindIndex('abc', 'bc', 1));
  console.log(testFindIndex('abc', 'c', 2));
  console.log(testFindIndex('abcabc', 'cab', 2));
}

main();