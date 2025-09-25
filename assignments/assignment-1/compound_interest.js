function calculatePrincipalWithInterest(principal, time, rate) {
  let principalAmount = principal;

  for (let currentYear = 1; currentYear <= time; currentYear++) {
  const interestOfEachYear = (principalAmount * rate) / 100;
  principalAmount = principalAmount + interestOfEachYear;
  }
  return principalAmount;
}

function calculateCompoundInterest(principal, time, rate) {
  const principalWithInterest = calculatePrincipalWithInterest(principal, time, rate);
  const compoundInterest = (principalWithInterest - principal);
  return compoundInterest;
}

function composedMessage(principal, time, rate, actualResult) {
  const principalMessage ="Principal:" + principal;
  const timeMessage = "\nTime:" + time;
  const rateMessage ="\nRate of interest:" + rate; 
  const resultMessage = "\nCompound interest:" + actualResult
  return principalMessage  + timeMessage +  rateMessage + resultMessage;
}

function isApproximatelyEqual(x, y) {
    const toleranceCheck = (x - y);
    return (toleranceCheck <= 0.01) && (toleranceCheck >= -0.01);
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected Interest:" + expectedResult;
  const failedCase = "❌\n" + fragmentedMessage + expectation;
  const passedCase = "✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}

function testCompoundInterest(principal, time, rate, expectedResult) {
  const actualResult = calculateCompoundInterest(principal, time, rate);
  const fragmentedMessage = composedMessage(principal, time, rate, actualResult);
  const isNearToEqual = isApproximatelyEqual(actualResult, expectedResult);
  const message = generateFailOrPass(isNearToEqual, fragmentedMessage, expectedResult);
  return message;
}


function main() {
  console.log(testCompoundInterest(1500, 2, 3, 91.34));
  console.log(testCompoundInterest(1000, 2, 20, 440));
  console.log(testCompoundInterest(2000, 4, 12, 1147.03));
  console.log(testCompoundInterest(10000, 5, 15, 10113.57));
  console.log(testCompoundInterest(15000, 7, 12, 18160.22));
}

main();
