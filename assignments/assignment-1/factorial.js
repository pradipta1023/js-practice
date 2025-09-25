function calculateFactorial(factorialTerm) {
  let output = 1;
  
  for (let currentTerm = 1; currentTerm <= factorialTerm ; currentTerm++) {
    output = output * currentTerm;
  }
  
  return output;
}

function composedMessage(factorialTerm, factorialResult) {
  const factorialMessage = "\nFactorial Result:" + factorialResult;
  return "Factorial Term:" + factorialTerm + factorialMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected factorial:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testFactorial(factorialTerm, expectedFactorial) {
  const factorialResult = calculateFactorial(factorialTerm);
  const fragmentedMessage = composedMessage(factorialTerm, factorialResult);
  const isSameResult = expectedFactorial === factorialResult;
  const message =  generateFailOrPass(isSameResult, fragmentedMessage, expectedFactorial);
  return message;
}

function main() {
  console.log(testFactorial(5, 120));
  console.log(testFactorial(4, 24));
  console.log(testFactorial(3, 6));
  console.log(testFactorial(2, 2));
  console.log(testFactorial(1, 1));
  console.log(testFactorial(0, 1));
}

main();
