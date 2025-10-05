function stringCompress(stringToCompress, firstPointer, secondPointer) {
  if (stringToCompress[firstPointer] !== stringToCompress[secondPointer]) {
    const compressedString = stringToCompress[firstPointer] + (secondPointer - firstPointer);
    return compressedString + stringCompress(stringToCompress, secondPointer, secondPointer);
  }
  if(secondPointer === stringToCompress.length) {
    return "";
  }
  return stringCompress(stringToCompress, firstPointer, secondPointer + 1);
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

function testStringCompression(stringToCompress, expectedString) {
  const actualString = stringCompress(stringToCompress, 0, 1);
  const fragmentMessage = composedMessage(stringToCompress, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testStringCompression("aabcccaaaa", "a2b1c3a4"));
  console.log(testStringCompression("a", "a1"));
  console.log(testStringCompression("abb", "a1b2"));
  console.log(testStringCompression("aaaaaa", "a6"));
  console.log(testStringCompression("aaabbb", "a3b3"));
}

main();
