function isLeapYear(givenYear) {
  const isDivisibleByHundred = (givenYear % 100 ) === 0;
  const isDivisibleByFourHundred = (givenYear % 400) === 0;
  const isDivisibleByFour = (givenYear % 4) === 0;
  
  const isLeapYearOrNot = isDivisibleByHundred ? isDivisibleByFourHundred : isDivisibleByFour;
  
  return isLeapYearOrNot;
}

function composedMessage(givenYear, isLeapYearOrNot) {
  const leapYearMessage = "\nIs leap year:" + isLeapYearOrNot;
  return "Given year:" + givenYear + leapYearMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected output:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testIsLeapYear(givenYear, expectedOutput) {
  const actualOutput = isLeapYear(givenYear);
  const fragmentedMessage = composedMessage(givenYear, actualOutput);
  const isSameOutput = expectedOutput === actualOutput;
  const message =  generateFailOrPass(isSameOutput, fragmentedMessage, expectedOutput);
  return message;
}

function main() {
  console.log(testIsLeapYear(2000, true));
  console.log(testIsLeapYear(1900, false));
  console.log(testIsLeapYear(2024, true));
  console.log(testIsLeapYear(2025, false));
}

main();
