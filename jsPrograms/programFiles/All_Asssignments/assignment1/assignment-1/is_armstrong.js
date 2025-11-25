function lengthOfTerm(givenTerm) {
  let inputNumber = givenTerm;
  let lengthOfNumber = 0;

  while(inputNumber !== 0){
    const lastBit = inputNumber % 10;
    inputNumber = (inputNumber - lastBit) / 10;
    lengthOfNumber = lengthOfNumber + 1;
  }
  return lengthOfNumber;
}

function calculatePower(term, power) {
  return term ** power;
}

function isArmstrong(givenTerm) {
  let inputNumber = givenTerm;
  let sumOfPowerOfBits = 0;
  const lengthOfNumber = lengthOfTerm(givenTerm);

  while(inputNumber !== 0) {
    const lastBit = inputNumber % 10;
    sumOfPowerOfBits = sumOfPowerOfBits + calculatePower(lastBit, lengthOfNumber);
    inputNumber = (inputNumber - lastBit) / 10;
  }

  let isArmstrong = sumOfPowerOfBits === givenTerm;
  return isArmstrong;
}

function composedMessage(givenTerm, isArmstrongOrNot) {
  const armstrongMessage = "\nIs armstrong:" + isArmstrongOrNot
  return "Given term:" + givenTerm + armstrongMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected value:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testIsArmstrong(givenTerm, expectedOutput) {
  const isArmstrongOrNot = isArmstrong(givenTerm);
  const fragmentedMessage = composedMessage(givenTerm, isArmstrongOrNot);
  const isSameOutput = expectedOutput === isArmstrongOrNot; 
  const message = generateFailOrPass(isSameOutput, fragmentedMessage, expectedOutput);
  return message;

}

function main() {
  console.log(testIsArmstrong(153, true));
  console.log(testIsArmstrong(1, true));
  console.log(testIsArmstrong(150, false));
  console.log(testIsArmstrong(7, true));
  console.log(testIsArmstrong(200, false));
}

main();


