function calculateSimpleInterest(p, t, r) {
  const simpleInterest = (p * r * t) / 100;
  return simpleInterest;
}

function composedMessage(p, t, r, actualResult) {
  const principalMessage ="Principal:" + p;
  const timeMessage = "\nTime:" + t;
  const rateMessage ="\nRate of interest:" + r; 
  const resultMessage = "\nCompound interest:" + actualResult
  return principalMessage  + timeMessage +  rateMessage + resultMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected Interest:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}

function testSimpleInterest(p, t, r, expectedResult) {
  const actualResult = calculateSimpleInterest(p, t, r);
  const fragmentedMessage = composedMessage(p, t, r, actualResult);
  const isSameResult = actualResult === expectedResult;
  const message = generateFailOrPass(isSameResult, fragmentedMessage, expectedResult);
  return message;
}

function main() {
  console.log(testSimpleInterest(0, 1, 2, 0));
  console.log(testSimpleInterest(1000, 1, 20, 200));
  console.log(testSimpleInterest(500, 2, 10, 100));
  console.log(testSimpleInterest(400, 3, 12, 144));
}

main();
