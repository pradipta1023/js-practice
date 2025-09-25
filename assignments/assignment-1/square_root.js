function generateSquareRoot(givenNumber) {
  return givenNumber ** 0.5;
}

function composedMessage(givenNumber, squareRoot) {
  const squareRootMessage = "\nSquare root:" + squareRoot;
  return "Given number:" + givenNumber + squareRootMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected square root:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function isApproximatelyEqual(x, y) {
    const toleranceCheck = (x - y);
    return (toleranceCheck <= 0.01) && (toleranceCheck >= -0.01);
}

function testGenerateSquareRoot(givenNumber, expectedOutput) {
  const actualOutput = generateSquareRoot(givenNumber);
  const fragmentedMessage = composedMessage(givenNumber, actualOutput);
  const isNearToEqual = isApproximatelyEqual(actualOutput, expectedOutput);
  const message = generateFailOrPass(isNearToEqual, fragmentedMessage, expectedOutput);
  return message;
}


function main() {
  console.log(testGenerateSquareRoot(4, 2));
  console.log(testGenerateSquareRoot(8, 2.82));
  console.log(testGenerateSquareRoot(9, 3));
  console.log(testGenerateSquareRoot(12, 3.46));
  console.log(testGenerateSquareRoot(18, 4.24));
}

main();
