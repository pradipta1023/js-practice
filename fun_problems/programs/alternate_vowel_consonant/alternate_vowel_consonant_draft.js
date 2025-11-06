function isVowel(character) {
  switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
  }

  return false;
}

function evenVowelPosition(word) {
  let resultWord = '';
  let junkLetters = '';

  for(let index = 0; index < word.length; index++) {
    
  }
}

function oddVowelPosition(word) {

}

function alternate(isVowel, word) {
  if (isVowel) {
    return evenVowelPosition(word);
  }

  return oddVowelPosition(word);
}

function splitingWord(word) {
  const isVowelOrNot = isVowel(word[0]);

  return alternate(isVowelOrNot, word);
}

function composedMessage(word, actualOutput) {
  const givenWordMessage = "\nGiven word:" + word;
  const outputMessage = "\n\nOutput:" + actualOutput;
  return givenWordMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedOutput) {
  const expectation = "\nExpected output:" + expectedOutput;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testSplittingWord(word, expectedOutput) {
  const actualOutput = splitingWord(word);
  const fragmentMessage = composedMessage(word, actualOutput);
  const isSame = actualOutput === expectedOutput;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedOutput);
  return message;
}


function testAll() {
  console.log(testSplittingWord("abc", "a,b,c"))
}

testAll();