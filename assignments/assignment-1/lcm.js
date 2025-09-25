function findLcm(firstTerm, secondTerm) {
  let lcmValue = firstTerm > secondTerm ? firstTerm : secondTerm;
  let isDivisible = true;
  
  while(isDivisible) {
  
    isDivisible = !(firstTerm === 0 || secondTerm === 0);
    if(lcmValue % firstTerm === 0 && lcmValue % secondTerm === 0) {
      return lcmValue;
      isDivisible = false;
    }
    lcmValue = lcmValue + 1;
  }
  
  if(firstTerm === 0 || secondTerm === 0){
    lcmValue = (firstTerm === 0) ? firstTerm : lcmValue;
    lcmValue = (secondTerm === 0) ? secondTerm : lcmValue;
    return lcmValue;
  }
}

function composedMessage(firstTerm, secondTerm, lcmValue) {
  const firstTermMessage = "First term:" + firstTerm;
  const secondTermMessage = "\nSecond term:"+ secondTerm;
  const lcmMessage = "\nlcm value:" + lcmValue;
  return firstTermMessage + secondTermMessage + lcmMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected lcm:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testHcfFind(firstTerm, secondTerm, expectedLcmValue) {
  const lcmValue = findLcm(firstTerm, secondTerm);
  const fragmentedMessage = composedMessage(firstTerm, secondTerm, lcmValue);
  const isSameValue = expectedLcmValue === lcmValue;
  const message =  generateFailOrPass(isSameValue, fragmentedMessage, expectedLcmValue);
  return message;
}


function main() {
  console.log(testHcfFind(0, 1, 0));
  console.log(testHcfFind(24, 36, 72));
  console.log(testHcfFind(10, 5, 10));
  console.log(testHcfFind(20, 40, 40));
  console.log(testHcfFind(27, 18, 54));
}

main();
