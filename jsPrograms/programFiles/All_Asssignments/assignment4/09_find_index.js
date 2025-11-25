function findIndex(string, char) {
  if (char === undefined || char.length === 0) {
    return -1;
  }
  return checkCharacter(string, char, 0);
}

function checkCharacter(string, char, index) {
  if (index === string.length) {
    return -1;
  }
  if (isSubStringAt(string, char, index)) {
    return index;
  }
  return checkCharacter(string, char, index + 1);
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

function testFindIndex(string, otherString, expectedString) {
  const result = findIndex(string, otherString);
  const fragmentMessage = composedMessage(string, otherString, result);
  const isSame = result === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testFindIndex("abc", "c", 2));
  console.log(testFindIndex("abc", "b", 1));
  console.log(testFindIndex("Hello", "o", 4));
  console.log(testFindIndex("Thoughtworks", "r", 9));
  console.log(testFindIndex("The", "r", -1));
  console.log(testFindIndex("abc", "a", 0));
}

main();