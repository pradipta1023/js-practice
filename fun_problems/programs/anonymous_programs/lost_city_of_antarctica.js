function unlockDoor(n) {
  if (n <= 4999) {
    return -1;
  }
  if (Math.sqrt(n).toString().includes(".")) {
    return unlockDoor(n - 1);
  }
  if (!isDivisibleBy7(n)) {
    return unlockDoor(n - 1);
  }
  if (sumOfDigits(n) <= 30) {
    return unlockDoor(n - 1);
  }
  return n;
}

function isDivisibleBy7(number) {
  return number % 7 === 0;
}

function sumOfDigits(number) {
  if (number === 0) {
    return 0;
  }
  const remainder = number % 10;
  number = (number - (number % 10)) / 10;
  return remainder + sumOfDigits(number);
}

function composedMessage(stringToCompress, actual, testDesc) {
  const inputMessage = `\t|Input : [${stringToCompress}]`;
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

function testUnlockDoor(number, expected, testDesc) {
  const actual = unlockDoor(number);
  const fragmentMsg = composedMessage(number, actual, testDesc);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testUnlockDoor(10000, -1, "No number to unlock"));
  console.log(testUnlockDoor(20000, 17688, "only single number"));
}

main();