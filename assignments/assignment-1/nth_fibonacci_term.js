function nthFibonacciTerm(term) {
  let sum = 0;
  let currentTerm = 0;
  let nextTerm = 1;

  for(let termToPrint = 0; termToPrint < term-1; termToPrint++) {
    sum = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = sum;
  }

  return currentTerm;
}

function composedMessage(nthTerm, actualFibonacciTerm) {
  const fibonacciMessage = "\nFibonacci term:" + actualFibonacciTerm
  return "Term to show:" + nthTerm + fibonacciMessage;
}

function generateFailOrPass(isSameTerm, fragmentedMessage, expectedTerm) {
  const expectation = "\nExpected term:" + expectedTerm;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameTerm) {
    return passedCase;
  }
  return failedCase;
}


function testNthFibonacciTerm(nthTerm, expectedTerm) {
  const actualTerm = nthFibonacciTerm(nthTerm);
  const fragmentedMessage = composedMessage(nthTerm, actualTerm);
  const isSameTerm = expectedTerm === actualTerm;
  const message = generateFailOrPass(isSameTerm, fragmentedMessage, expectedTerm);
  return message;
}


function main() {
  console.log(testNthFibonacciTerm(1, 0));
  console.log(testNthFibonacciTerm(2, 1));
  console.log(testNthFibonacciTerm(3, 1));
  console.log(testNthFibonacciTerm(4, 2));
  console.log(testNthFibonacciTerm(5, 3));
  console.log(testNthFibonacciTerm(6, 5));
  console.log(testNthFibonacciTerm(7, 8));
  console.log(testNthFibonacciTerm(8, 13));
}

main();
