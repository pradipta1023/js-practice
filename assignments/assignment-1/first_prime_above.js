function isPrimeAbove(givenNumber) {
  let isPrimeOrNot = true;
  let currentNumber = givenNumber + 1;
  
  while(true) {
    isPrimeOrNot = isPrime(currentNumber);
  
    if(isPrimeOrNot && currentNumber > 1) {
      return currentNumber;
    }
    currentNumber = currentNumber + 1;
  }
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


function composedMessage(givenNumber, actualFirstPrime) {
  const firstPrimeMessage = "\nFirst Prime:" + actualFirstPrime;
  return "Given Number:" + givenNumber + firstPrimeMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected first prime:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testFirstPrimeAbove(givenNumber, expectedFirstPrime) {
  const actualFirstPrime = isPrimeAbove(givenNumber);
  const fragmentedMessage = composedMessage(givenNumber, actualFirstPrime);
  const isSamePrime = expectedFirstPrime === actualFirstPrime;
  const message =  generateFailOrPass(isSamePrime, fragmentedMessage, expectedFirstPrime);
  return message;
}

function main() {
  console.log(testFirstPrimeAbove(10, 11));
  console.log(testFirstPrimeAbove(20, 23));
  console.log(testFirstPrimeAbove(15, 17));
  console.log(testFirstPrimeAbove(13, 17));
  console.log(testFirstPrimeAbove(23, 29));
  console.log(testFirstPrimeAbove(0, 2));
}

main();
