function primesInAGivenRange(startOfRange, endOfRange) {
  let isPrimeorNot;
  let primesInRange = '';
  for(let currentTerm = startOfRange; currentTerm <= endOfRange; currentTerm++) {
    isPrimeorNot = isPrime(currentTerm);
  
    if(isPrimeorNot && currentTerm > 1) {
      primesInRange = primesInRange + currentTerm + " ";
    }
  }
  return primesInRange;
}

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


function composedMessage(startOfRange, endOfRange, primesInRange) {
  const startRange = "Start term:" + startOfRange;
  const endRange = "End term:"+ endOfRange;
  const primesInRangeMessage = "\nPrimes in range:" + primesInRange
  return startRange + endRange + primesInRangeMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected primes:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testPrimesInRange(startOfRange, endOfRange, expectedPrimes) {
  const actualPrimesInRange = primesInAGivenRange(startOfRange, endOfRange);
  const fragmentedMessage = composedMessage(startOfRange, endOfRange, actualPrimesInRange);
  const isSamePrimes = expectedPrimes === actualPrimesInRange;
  const message = generateFailOrPass(isSamePrimes, fragmentedMessage, expectedPrimes);
  return message;
}

function main() {
  console.log(testPrimesInRange(1,10,"2 3 5 7 "));
  console.log(testPrimesInRange(1,20,"2 3 5 7 11 13 17 19 "));
  console.log(testPrimesInRange(1,30,"2 3 5 7 11 13 17 19 23 29 "));
}

main();
