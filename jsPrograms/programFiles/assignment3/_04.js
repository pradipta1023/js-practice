/*
  Implement the below function to count the number of words
  in the given sentence.

  Rules:
  - A word is defined as a sequence of non-whitespace characters.
  - Whitespace includes SPACE(" "), TAB("\t"), and NEW LINE("\n").
  - Multiple consecutive whitespace characters should be treated
    as a single separator.
  - Leading and trailing whitespace should not affect the word count.

  Example:
  countWords("hello   \t   world \n test")
    -> 3
*/
function isSpecialChar(character) {
  return character === " " || character === "\n" || character === "\t";
}

function isWord(character) {
  return character !== " " && character !== "\n" && character !== "\t";
}

function countWords(sentence) {
  let trimmedSentence = trim(sentence);
  if(trimmedSentence.length === 0) {
    return 0;
  }
  let noOfWords = 0;
  let prevCharacter = trimmedSentence[0];
  for (let index = 1; index < trimmedSentence.length; index++) {
    const currentChar = trimmedSentence[index];

    if (isWord(prevCharacter) && (isSpecialChar(currentChar))) {
      noOfWords++;
    }
    prevCharacter = trimmedSentence[index];
  }
  return noOfWords + 1;
}

function trim(sentence) {
  let start = 0;
  let end = sentence.length - 1;
  while ((sentence[start] === " " || sentence[start] === "\n" || sentence[start] === "\t") && start < sentence.length) {
    start++;
  }
  while ((sentence[end] === " " || sentence[end] === "\n" || sentence[end] === "\t") && end >= 0) {
    end--;
  }
  let trimString = "";
  for (let index = start; index <= end; index++) {
    trimString = trimString + sentence[index];
  }
  return trimString;
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

function testCountWords(number, expectedString) {
  const actualString = countWords(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testCountWords("  Hel lo  ", 2));
  console.log(testCountWords("hello   \t   world \n test", 3));
  console.log(testCountWords("hello   \n\t   world \n test", 3));
  console.log(testCountWords("hello   \n\t   world \n test", 3));
  console.log(testCountWords("   ", 0));
}

main();