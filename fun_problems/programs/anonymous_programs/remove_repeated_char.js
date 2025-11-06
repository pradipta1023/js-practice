function removeRepeatedChars(string, index) {
  if (index === string.length) {
    return "";
  }
  if (noOfDuplicates(string, 0, string[index]) === 1) {
    return string[index] + removeRepeatedChars(string, index + 1);
  }
  return "" + removeRepeatedChars(string, index + 1);
}

function noOfDuplicates(string, index, char) {
  if (index === string.length) {
    return 0;
  }
  if (string[index] === char) {
    return 1 + noOfDuplicates(string, index + 1, char);
  }
  return noOfDuplicates(string, index + 1, char);
}

function composedMessage(string, actual) {
  const inputMessage = `\t|Input : [${string}]`;
  const outputMessage = `\n\t|\n\t|Output : ${actual}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentMsg, expected, testDesc) {
  const expectation = "\n\t|Expected output : " + expected;
  const emojiForFailedCase = `----------\n❌ ${testDesc}\n`;
  const failedCase = emojiForFailedCase + fragmentMsg + expectation;

  if (isSameResult) {
    return messageForPassedCase(testDesc);
  }

  return failedCase;
}

function messageForPassedCase(testDesc) {
  return `✅ ${testDesc}`;
}

function testremoveRepeatedChars(string, expected, testDesc) {
  const actual = removeRepeatedChars(string, 0);
  const fragmentMsg = composedMessage(string, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testremoveRepeatedChars("swiss", "wi", "2 chars from middle"));
  console.log(testremoveRepeatedChars("aabbcc", "", "all repeated"));
  console.log(testremoveRepeatedChars("abcabcde", "de", "last 2 not repeat"));
  console.log(testremoveRepeatedChars("xxyyzzpqr", "pqr", "last 3"));
  console.log(testremoveRepeatedChars("asaipknk", "sipn", "from middle"));
  console.log(testremoveRepeatedChars("asianPaint", "sPt", "from middle"));
}

main();