function minOfTwo(x, y) {
  return x > y ? y : x; 
}

function findHcf(firstTerm, secondTerm) {
  let hcfValue = 1;
  let minOfTwoValue = minOfTwo(firstTerm, secondTerm);
  
  for(let divisor = 1; divisor <= minOfTwoValue; divisor++) {
    if(firstTerm % divisor === 0 && secondTerm % divisor === 0) {
      hcfValue = divisor;
    }
  }
  
  hcfValue = (firstTerm === 0) ? secondTerm : hcfValue;
  hcfValue = (secondTerm === 0) ? firstTerm : hcfValue;

  return hcfValue;
}

function composedMessage(firstTerm, secondTerm, hcfValue) {
  const firstTermMessage = "First term:" + firstTerm;
  const secondTermMessage = "\nSecond term:"+ secondTerm;
  const hcfMessage = "\nhcf value:" + hcfValue;
  return  firstTermMessage + secondTermMessage + hcfMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected hcf:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testHcfFind(firstTerm, secondTerm, expectedHcfValue) {
  const hcfValue = findHcf(firstTerm, secondTerm);
  const fragmentedMessage = composedMessage(firstTerm, secondTerm, hcfValue);
  const isSameValue = expectedHcfValue === hcfValue;
  const message = generateFailOrPass(isSameValue, fragmentedMessage, expectedHcfValue);
  return message;
}

function main() {
  console.log(testHcfFind(0, 1, 1));
  console.log(testHcfFind(24, 36, 12));
  console.log(testHcfFind(10, 5, 5));
  console.log(testHcfFind(20, 40, 20));
  console.log(testHcfFind(27, 18, 9));
}

main();
