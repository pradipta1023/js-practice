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

function firstPrimeAbove(number) {
  if (isPrime(number + 1)) {
    return number + 1;
  }
  return firstPrimeAbove(number + 1);
}

function composedMessage(primeCandidate, actualString) {
  const inputMessage = `\t|Input : [${primeCandidate}]\t\t|`;
  const outputMessage = `\n\t|\t\t\t|\n\t|Output : ${actualString}\t\t|`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\n\t|Expected output : " + expectedString + "\t|";
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

function testFirstPrimeAbove(number, expectedString) {
  const actualString = firstPrimeAbove(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testFirstPrimeAbove(7, 11));
  console.log(testFirstPrimeAbove(9, 11));
  console.log(testFirstPrimeAbove(11, 13));
  console.log(testFirstPrimeAbove(13, 17));
}

main();