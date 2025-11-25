function convertDecimalToBinary(decimal) {
  let decimalNumber = decimal;
  let remainder;
  let binary = '';
  while (decimalNumber !== 0) {
    remainder = decimalNumber % 2;
    decimalNumber = (decimalNumber -remainder) / 2; 
    binary = binary + remainder;
  }
  
  if (remainder === undefined) {
    return '0';
  }
  return binary;
}

function composedMessage(decimal, binary) {
  return "Decimal:" + decimal + "\nBinary:" + binary;
}

function generateFailOrPass(isSameOutput, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected binary:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameOutput) {
    return passedCase;
  }
  return failedCase;
}

function testDecimalToBinary(decimal, expectedBinaryOutput) {
  const binaryOutput = convertDecimalToBinary(decimal);
  const fragmentedMessage = composedMessage(decimal, binaryOutput);
  const isSameOutput = binaryOutput === expectedBinaryOutput;
  const message = generateFailOrPass(isSameOutput, fragmentedMessage, expectedBinaryOutput);
  return message;
}


function main() {
  console.log(testDecimalToBinary(4, "001"));
  console.log(testDecimalToBinary(8, "0001"));
  console.log(testDecimalToBinary(7, "111"));
  console.log(testDecimalToBinary(1023, "1111111111"));
}

main();
