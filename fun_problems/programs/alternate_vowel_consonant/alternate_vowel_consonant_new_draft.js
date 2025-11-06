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

function isConsonant(character) {
  switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return false;
  }

  return true;
}

function vowelPosition(word, startIndex, resultWord, junkLetters) {
  if (startIndex === word.length) {
    resultWord = resultWord + junkLetters;
    return resultWord;
  }

  for (let index = startIndex; index < word.length; index++) {
    if (isVowel(word[index])) {
      resultWord = resultWord + word[index];
      index = index + 1;
      return consonantPosition(word, index, resultWord, junkLetters);
    } else {
      junkLetters = junkLetters + ',' + word[index];
    }
  }

  resultWord = resultWord + junkLetters;
  return resultWord;
}

function consonantPosition(word, startIndex, resultWord, junkLetters) {
  if (startIndex === word.length) {
    resultWord = resultWord + junkLetters;
    return resultWord;
  }

  for (let index = startIndex; index < word.length; index++) {
    if (isConsonant(word[index])) {
      resultWord = resultWord + word[index];
      index = index + 1;
      return vowelPosition(word, index, resultWord, junkLetters);
    } else {
      junkLetters = junkLetters + ',' + word[index];
    }
  }

  resultWord = resultWord + junkLetters;
  return resultWord;
}

function alternate(isVowel, word) {
  if (isVowel) {
    return vowelPosition(word, 0, '', '');
  }

  return consonantPosition(word, 0, '', '');
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
  console.log(testSplittingWord("abc", "ab,c"));
  console.log(testSplittingWord("bca", "ba,c"));
  console.log(testSplittingWord("bca", "ba,c"));
  console.log(testSplittingWord("apple", "ape,p,l"));
  console.log(testSplittingWord("there", "tere,h"));
  console.log(testSplittingWord("hello", "helo,l"));
  console.log(testSplittingWord("abyss", "ab,y,s,s"));
  console.log(testSplittingWord("this", "tis,h"));
  console.log(testSplittingWord("three", "te,he,r"));
  console.log(testSplittingWord("aaabbb", "ab,ab,ab"));
}

testAll();