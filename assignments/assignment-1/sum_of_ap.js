
function generateSumOfAp(firstTerm, commonDifference, noOfTerms) {
  let sumOfAp = 0;
  let currentTerm = firstTerm;
  
  for(let currentTermCount = 1; currentTermCount <= noOfTerms; currentTermCount++) {
    sumOfAp = sumOfAp + currentTerm;
    currentTerm = currentTerm +  commonDifference;
  }

  return sumOfAp;
}


function composedMessage(firstTerm, commonDifference, noOfTerms, sumOfAp) {
  const firstTermMessage = "first term:" + firstTerm;
  const commonDifferenceMessage = "\ncommon difference:" + commonDifference;
  const noOfTermsMessage = "\nNumber of terms:" + noOfTerms;
  const sumOfAPMessage = "\nsum of AP:" + sumOfAp;
  return firstTermMessage + commonDifferenceMessage + noOfTermsMessage + sumOfAPMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected sum of AP:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testSumOfAP(firstTerm, commonDifference, noOfTerms, expectedSumOfAP) {
  const actualSumOfAP = generateSumOfAp(firstTerm, commonDifference, noOfTerms);
  const fragmentedMessage = composedMessage(firstTerm, commonDifference, noOfTerms, actualSumOfAP);
  const isSameSumOfAP = actualSumOfAP === expectedSumOfAP;
  const message = generateFailOrPass(isSameSumOfAP, fragmentedMessage, expectedSumOfAP);
  return message;
}

function main() {
  console.log(testSumOfAP(1, 2, 100, 10000));
  console.log(testSumOfAP(3, 5, 10, 255));
  console.log(testSumOfAP(6, 2, 32, 1184));
  console.log(testSumOfAP(8, 8, 8, 288));
  console.log(testSumOfAP(10, 20, 30, 9000));
}

main();
