/*
  Implement the below function to replace every run of adjacent SPACE(" ")
  characters with a single SPACE in the given sentence.

  Rules:
  - Consider only the plain SPACE character (" "). Any contiguous sequence
    of one or more SPACE characters should become a single SPACE.
  - Leading and trailing runs of spaces are also collapsed to a single space.
  - Do NOT modify other whitespace characters: TAB("\t") and NEW LINE("\n")
    must remain exactly as they are.
  - Runs of spaces that are separated by other characters (including \t or \n)
    are treated separately and each such run is collapsed independently.

  Examples:
  removeAdjacentDuplicateSpaces("statement      with    two spaces")
    -> "statement with two spaces"
    (multiple spaces between words collapsed to single spaces)

  removeAdjacentDuplicateSpaces("   hello   world   ")
    -> " hello world "
    (leading/trailing runs collapsed to single leading/trailing space)
*/

function nextWord(sentence, start) {
  for (let index = start; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
      return index;
    }
  }
  return sentence.length;
}

function removeAdjacentDuplicateSpaces(sentence) {
  let newSentence = '';
  let index = 0;
  while (index < sentence.length) {
    newSentence = newSentence + sentence[index];
    if (sentence[index] === " ") {
      index = nextWord(sentence, index + 1);
      newSentence += index !== sentence.length ? sentence[index] : "";
    }

    index++;
  }
  return newSentence;
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

function testremoveAdjacentDuplicateSpaces(number, expectedString) {
  const actualString = removeAdjacentDuplicateSpaces(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testremoveAdjacentDuplicateSpaces("  Hello  ", " Hello "));
  console.log(testremoveAdjacentDuplicateSpaces("  Hello  \t \n", " Hello \t \n"));
  console.log(testremoveAdjacentDuplicateSpaces("  ", " "));
  console.log(testremoveAdjacentDuplicateSpaces(" ", " "));
  console.log(testremoveAdjacentDuplicateSpaces("", ""));
  console.log(testremoveAdjacentDuplicateSpaces("a    b    c", "a b c"));
  console.log(testremoveAdjacentDuplicateSpaces("hello    , world !", "hello , world !"));
}

main();