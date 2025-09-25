function prime_factors(givenNumber) {
  let primeDivisor = 2;
  let inputNumber = givenNumber;
  let primeFactor = '';

  while(inputNumber > 0 && primeDivisor <= givenNumber) {

    if(inputNumber % primeDivisor !== 0) {
      primeDivisor = primeDivisor + 1;
    } else {
      inputNumber = inputNumber / primeDivisor;
      primeFactor = primeFactor + primeDivisor + ' ';
    }
  }
  return primeFactor;
}

function composedMessage(givenNumber, primeFactors) {
  const primeFactorsMessage = "\nPrime factors:" + primeFactors
  return "Given number:" + givenNumber + primeFactorsMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedFactors) {
  const expectation = "\nExpected factors:" + expectedFactors;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testPrimeFactors(givenNumber, expectedFactors) {
  const actualFactors = prime_factors(givenNumber);
  const fragmentedMessage = composedMessage(givenNumber, actualFactors);
  const areSameFactors = expectedFactors === actualFactors;
  const message =  generateFailOrPass(areSameFactors, fragmentedMessage, expectedFactors);
  return message;
}

function main() {
  console.log(testPrimeFactors(12, "2 2 3 "));
  console.log(testPrimeFactors(24, "2 2 2 3 "));
  console.log(testPrimeFactors(20, "2 2 5 "));
  console.log(testPrimeFactors(36, "2 2 3 3 "));
}

main();
