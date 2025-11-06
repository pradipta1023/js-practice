function fibonacciSeries(endOfRange) {
  let sum = 0;
  let currentTerm = 0;
  let nextTerm = 1;
  let fibonacciSeries = '';

  for (let term = 0; term < endOfRange; term++) {
    fibonacciSeries = fibonacciSeries + currentTerm + " ";
    sum = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = sum;
  }
  return fibonacciSeries;
}

function composedMessage(nthTerm, actualFibonacciseries) {
  const fibonacciMessage = "\nFibonacci term:" + actualFibonacciseries;
  return "Term to show:" + nthTerm + fibonacciMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected series:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testFibonacciSeries(endOfRange, expectedSeries) {
  const actualSeries = fibonacciSeries(endOfRange);
  const fragmentedMessage = composedMessage(endOfRange, actualSeries);
  const isSameSeries = expectedSeries === actualSeries; 
  const message = generateFailOrPass(isSameSeries, fragmentedMessage, expectedSeries);
  return message;
}

function main() {
  console.log(testFibonacciSeries(1, "0 "));
  console.log(testFibonacciSeries(2, "0 1 "));
  console.log(testFibonacciSeries(3, "0 1 1 "));
  console.log(testFibonacciSeries(4, "0 1 1 2 "));
  console.log(testFibonacciSeries(5, "0 1 1 2 3 "));
  console.log(testFibonacciSeries(6, "0 1 1 2 3 5 "));
  console.log(testFibonacciSeries(7, "0 1 1 2 3 5 8 "));
  console.log(testFibonacciSeries(8, "0 1 1 2 3 5 8 13 "));
}

main();
