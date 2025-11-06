/*
  Implement the below function to trim(remove all leading and trailing 
  whitespaces) from the given sentence.
  A whitespace is SPACE(" "), NEW LINE("\n"), TAB("\t")
  Examples:
  reverseString(" hello world\n") returns "hello world"
*/

function startFind(sentence) {
  let start = 0;
  let isSpace = sentence[start] === " ";
  let isNewLine = sentence[start] === '\n';
  let isTab = sentence[start] === '\t';

  while((isSpace || isNewLine || isTab) && start < sentence.length) {
    isSpace = sentence[start] === " ";
    isNewLine = sentence[start] === '\n';
    isTab = sentence[start] === '\t';
    start++;
  }
  
  return start;
}

function endFind(sentence) {
  let end = sentence.length - 1;
  let isSpace = sentence[end] === " ";
  let isNewLine = sentence[end] === '\n';
  let isTab = sentence[end] === '\t';

  while((isSpace|| isNewLine|| isTab) && end >= 0) {
    isSpace = sentence[end] === " ";
    isNewLine = sentence[end] === '\n';
    isTab = sentence[end] === '\t';
    end--;
  }
  
  return end;
}

function trim(sentence) {
    const start = startFind(sentence) - 1;
    const end = endFind(sentence) + 1;    
    let trimString = "";

    if(start >= end) {
      return "";
    }
    
    for(let index = start; index <= end; index++) {
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

function testTrim(number, expectedString) {
  const actualString = trim(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testTrim("  Hello  ", "Hello"));
  console.log(testTrim("\n\tHello  ", "Hello"));
  console.log(testTrim("\n\tHello\n\t", "Hello"));
  console.log(testTrim("\nHel lo\t", "Hel lo"));
  console.log(testTrim("\n\tHello\n\t", "Hello"));
  console.log(testTrim("\n\n", ""));
  console.log(testTrim("\t\t", ""));
  console.log(testTrim(" ", ""));
}

main();