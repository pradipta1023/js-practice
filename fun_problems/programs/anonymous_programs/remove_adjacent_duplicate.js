function removeAdjacentDuplicate(string, firstPointer, secondPointer) {
  console.log(string);
  if (secondPointer === string.length) {
    return string;
  }
  if (string[firstPointer] === string[secondPointer]) {
    const end = findDuplicate(string, secondPointer, string[firstPointer]);
    const newString = string.slice(0, firstPointer) + string.slice(end);
    return removeAdjacentDuplicate(newString, 0, 1);
  }
  return removeAdjacentDuplicate(string, firstPointer + 1, secondPointer + 1);
}

function findDuplicate(string, index, char) {
  if (index === string.length || string[index] !== char) {
    return index;
  }
  return findDuplicate(string, index + 1, char);
}

function composedMessage(stringToCompress, actualString) {
  const inputMessage = `\t|Input : [${stringToCompress}]`;
  const outputMessage = `\n\t|\n\t|Output : ${actualString}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\n\t|Expected output : " + expectedString;
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

function testRemoveAdjacentDuplicate(stringToCompress, expectedString) {
  const actualString = removeAdjacentDuplicate(stringToCompress, 0, 1);
  const fragmentMessage = composedMessage(stringToCompress, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testRemoveAdjacentDuplicate("aaabccddd", "b"));
  console.log(testRemoveAdjacentDuplicate("azxxzy", "ay"));
}

main();