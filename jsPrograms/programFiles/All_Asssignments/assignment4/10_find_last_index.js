function findLastIndex(string, char) {
  if (char === undefined || char.length === 0) {
    return -1;
  }
  if (string.length === 0) {
    return -1;
  }
  return checkCharacter(string, char, string.length - 1);
}

function checkCharacter(string, char, index) {
  if (index === 0) {
    return -1;
  }
  if (isSubStringAt(string, char, index)) {
    return index;
  }
  return checkCharacter(string, char, index - 1);
}

function isSubStringAt(string, char, index) {
  if (string[index] === char) {
    return true;
  }
  return false;
}

function composedMessage(primeCandidate, actualString) {
  const inputMessage = `\t|Input : [${primeCandidate}]\t\t|`;
  const outputMessage = `\n\t|\t\t\t\t|\n\t|Output : ${actualString}\t\t\t|`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\n\t|Expected output : " + expectedString + "\t\t|";
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return messageForPassedCase(expectedString);
  }

  return failedCase;
}

function messageForPassedCase(expectedString) {
  return `✅ Expected output : ${expectedString}`;
}

function testFindLastIndex(string, otherString, expectedString) {
  const result = findLastIndex(string, otherString);
  const fragmentMessage = composedMessage(string, otherString, result);
  const isSame = result === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testFindLastIndex("abca", "a", 3));
  console.log(testFindLastIndex("", "a", -1));
  console.log(testFindLastIndex("abc", "", -1));
  console.log(testFindLastIndex("abcabababa", "a", 8));
}

main();