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

function remvoeCommaFromEnd(text) {
  let updateText = '';

  for (let index = 0; index < text.length - 1; index++) {
    updateText = updateText + text[index];
  }

  return updateText;
}

function checkRemaining(word, resultWord) {
    if (word.length > 0) {
    const isVowelOrNot = isVowel(word[0]);
    resultWord = resultWord + ',';
    return isVowelOrNot ?
      nextPosition(word, 0, resultWord, '', true) :
      nextPosition(word, 0, resultWord, '', false);
  }
}

function nextPosition(word, startIndex, resultWord, remainingLetters, isExpectingVowel) {
  if (startIndex === word.length && remainingLetters.length === 0) {
    resultWord = resultWord + ',' + remainingLetters;
    return remvoeCommaFromEnd(resultWord);
  }

  for (let index = startIndex; index < word.length; index++) {
    const isCurrentCharVowel = isVowel(word[index]);

    if ((isCurrentCharVowel && isExpectingVowel) || (!isCurrentCharVowel && !isExpectingVowel)) {
      resultWord = resultWord + word[index];
      index = index + 1;
      return nextPosition(word, index, resultWord, remainingLetters, !isExpectingVowel);
    } else {
      remainingLetters = remainingLetters + word[index];
    }
  }

  return checkRemaining(remainingLetters, resultWord);
}

function startLetterDecider(isVowel, word) {
  if (isVowel) {
    return nextPosition(word, 0, '', '', true);
  }

  return nextPosition(word, 0, '', '', false);
}

function splitingWord(word) {
  const isVowelOrNot = isVowel(word[0]);

  return startLetterDecider(isVowelOrNot, word);
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
  console.log(testSplittingWord("aabaccd", "abac,ac,d"));
  console.log(testSplittingWord("x", "x"));
  console.log(testSplittingWord("axxa", "axa,x"));
  console.log(testSplittingWord("thoughtworks", "togor,huh,t,w,k,s"));
}

testAll();