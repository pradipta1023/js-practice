function firstEvenInTheRange(startingNumber) {
  return startingNumber % 2 === 0 ? startingNumber : startingNumber + 1;
}

function generateEvenInRange(startOfTheRange, endOfTheRange) {
  let startingNumber = firstEvenInTheRange(startOfTheRange);
  let evensInRange = '';
  
  for(let term = startingNumber; term <= endOfTheRange; term = term + 2) {
    evensInRange = evensInRange + term + " ";
  }

  return evensInRange;
}



function composedMessage(startOfTheRange, endOfTheRange, actualResult) {
  const startRange = "start  of the range:" + startOfTheRange;
  const endRange = "\nend of the range:"+ endOfTheRange;
  return startRange + endRange +"\nEven Series:" + actualResult;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation =  "\nExpected evens:" + expectedResult;
  const failedCase = "❌\n" + fragmentedMessage + expectation;
  const passedCase = "✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}

function testEvenOdd(startOfTheRange, endOfTheRange, expectedResult) {
  const actualResult = generateEvenInRange(startOfTheRange, endOfTheRange);
  const fragmentedMessage = composedMessage(startOfTheRange, endOfTheRange, actualResult);
  const isSameResult = actualResult === expectedResult;
  const message = generateFailOrPass(isSameResult, fragmentedMessage, expectedResult);
  return message;
}


function main() {
  console.log(testEvenOdd(73, 86, "74 76 78 80 82 84 86 "));
  console.log(testEvenOdd(0, 10, "0 2 4 6 8 10 "));
  console.log(testEvenOdd(11, 21, "12 14 16 18 20 "));
}

main();
