/*
  Implement the below function to convert a string from snake_case
  format into camelCase format.

  Example:
  toCamelCase("hello_wORLd_pro1gram")
    -> "helloWorldPro1gram"
*/

function getSmallLetter(targetIndex) {
  if (typeof targetIndex === "string") {
    return targetIndex;
  }

  const smallLetter = "abcdefghijklmnopqrstuvwxyz";
  return smallLetter[targetIndex];
}

function getCapitalLetter(targetIndex) {
  if (typeof targetIndex === "string") {
    return targetIndex;
  }
  const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return capitalLetter[targetIndex];
}

function getIndex(character) {
  const smallLetters = "abcdefghijklmnopqrstuvwxyz";
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = 0;
  while (index < smallLetters.length) {
    if (smallLetters[index] === character) {
      return index;
    }
    index++;
  }

  index = 0;
  while (index < capitalLetters.length) {
    if (capitalLetters[index] === character) {
      return index;
    }
    index++;
  }
  return character;
}


function trim(sentence) {
  let start = 0;
  let end = sentence.length - 1;
  while ((sentence[start] === "_") && start < sentence.length) {
    start++;
  }
  while ((sentence[end] === "_") && end >= 0) {
    end--;
  }
  let trimString = "";
  for (let index = start; index <= end; index++) {
    trimString = trimString + sentence[index];
  }
  return trimString;
}

function nextWord(sentence, start) {
  for (let index = start; index < sentence.length; index++) {
    if (sentence[index] !== "_") {
      return index;
    }
  }
  return sentence.length;
}


function toCamelCase(sentence) {
  const trimmedSentence = trim(sentence);
  let newString = '';
  let index = 0;
  while (index < trimmedSentence.length) {
    if (trimmedSentence[index] === '_') {
      const newIndex = nextWord(trimmedSentence, index + 1)
      const indexOfChar = getIndex(trimmedSentence[newIndex]);
      newString = newString + getCapitalLetter(indexOfChar);
      index = newIndex;
    } else {
      const indexOfChar = getIndex(trimmedSentence[index]);
      newString += indexOfChar === trimmedSentence[index] ? indexOfChar : getSmallLetter(indexOfChar);
    }
    index++;
  }
  return newString;
}

function composedMessage(number, actualString) {
  const givenNumberMessage = "\nGiven String:" + number;
  return givenNumberMessage + "\n\nOutput:" + actualString;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\nExpected output:" + expectedString;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testToCamelCase(number, expectedString) {
  const actualString = toCamelCase(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testToCamelCase("hello_wORLD___program", "helloWorldProgram"));
  console.log(testToCamelCase("hello_wORLD_pro1gram", "helloWorldPro1gram"));
  console.log(testToCamelCase("_hello_", "hello"));
  console.log(testToCamelCase("_hello_", "hello"));
  console.log(testToCamelCase("_hello_", "hello"));
  console.log(testToCamelCase("_hello", "hello"));
  console.log(testToCamelCase("_", ""));
  console.log(testToCamelCase("", ""));
  console.log(testToCamelCase("_hello_", "hello"));
  console.log(testToCamelCase("_hello__world_", "helloWorld"));
  console.log(testToCamelCase("_hello_123_world_", "hello123World"));
}

main();