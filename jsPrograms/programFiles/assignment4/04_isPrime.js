function remainder(dividend, divisor) {
  if (dividend === divisor) {
    return 0;
  }
  if (dividend <= divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function isPrime(primeCandidate) {
  if (primeCandidate <= 1) {
    return false;
  }
  return checkPrime(primeCandidate, 2);
}

function checkPrime(primeCandidate, divisor) {
  if (divisor ** 2 > primeCandidate) {
    return true;
  }
  if (remainder(primeCandidate, divisor) === 0) {
    return false;
  }
  return checkPrime(primeCandidate, divisor + 1);
}

function composedMessage(primeCandidate, actualString) {
  const inputMessage = `\t|Input : [${primeCandidate}]\t\t|`;
  const outputMessage = `\n\t|\t\t\t|\n\t|Output : ${actualString}\t\t|`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\n\t|Expected output :" + expectedString + "\t|";
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

function testIsPrime(number, expectedString) {
  const actualString = isPrime(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testIsPrime(7, true));
  console.log(testIsPrime(2, true));
  console.log(testIsPrime(8, false));
  console.log(testIsPrime(0, false));
  console.log(testIsPrime(9, false));
  console.log(testIsPrime(21, false));
  console.log(testIsPrime(29, true));
  console.log(testIsPrime(39, false));
  console.log(testIsPrime(1, true));
}

main();