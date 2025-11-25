function isPrime(primeCandidate) {
  let divisor = 2;
  let isPrime = true;

  while (divisor < primeCandidate && isPrime) {
    isPrime = primeCandidate % divisor !== 0;
    divisor = divisor + 1;
  }

  isPrime = isPrime && primeCandidate !==1 ;
  return isPrime;
}

function composedMessage(primeCandidate, isPrime) {
  const primeMessage = "\nIs Prime :" + isPrime;
  return "Prime Candidate:" + primeCandidate + primeMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected output:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}

function testIsPrime(primeCandidate, expectedOutput) {
  const isPrimeOrNot = isPrime(primeCandidate);
  const fragmentedMessage = composedMessage(primeCandidate, isPrimeOrNot);
  const isSameOutput = expectedOutput === isPrimeOrNot;
  const message =  generateFailOrPass(isSameOutput, fragmentedMessage, expectedOutput);
  return message;
}

function main() {
  console.log(testIsPrime(1, false));
  console.log(testIsPrime(2, true));
  console.log(testIsPrime(3, true));
  console.log(testIsPrime(5, true));
  console.log(testIsPrime(9, false));
}

main();
