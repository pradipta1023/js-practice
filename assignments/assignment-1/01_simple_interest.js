function calculateSimpleInterest(p, t, r) {
  const simpleInterest = (p * r * t) / 100;
  return simpleInterest;
}

function composedMessage(p, t, r, actualResult) {
  return "Principle:" + p + "\nTime:" + t + "\nRate of interest:" + r + "\nSimple interest:" + actualResult;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const failedCase = "❌\n" + fragmentedMessage + "\nExpected Interest:" + expectedResult;
  const passedCase = "✅\n" + fragmentedMessage + "\nExpected Interest:" + expectedResult;

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
