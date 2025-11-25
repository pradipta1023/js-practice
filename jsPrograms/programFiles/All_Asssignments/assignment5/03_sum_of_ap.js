function sumOfAP(a, d, n) {
  return getSumOfAP(a, d, n, 0, 0)
}

function getSumOfAP(a, d, n, counter, sumOfTerms) {
  if(counter === n) {
    return sumOfTerms;
  }
  sumOfTerms = sumOfTerms + a;
  return getSumOfAP(a + d, d, n, counter + 1, sumOfTerms);
}

function composeMessage(fristTerm, commonDifference, noOfTerms, actualString) {
  const inputMessage = `\t|Input : [${fristTerm} , ${commonDifference} , ${noOfTerms}]\t|`;
  const outputMessage = `\n\t|\t\t\t|\n\t|Output : ${actualString}\t\t|`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\n\t|Expected output : " + expectedString + "|";
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return messageForPassedCase(expectedString);
  }

  return failedCase;
}

function messageForPassedCase(expectedString) {
  return `✅ Expected output : ${expectedString}`;
}

function testSumOfAP(fristTerm, commonDifference, noOfTerms, expectedString) {
  const actualString = sumOfAP(fristTerm, commonDifference, noOfTerms);
  const fragmentMessage = composeMessage(fristTerm, commonDifference, noOfTerms, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testSumOfAP(1, 3, 3, 12));
  console.log(testSumOfAP(10, 20, 30, 9000));
  console.log(testSumOfAP(0, 1, 3, 3));
  console.log(testSumOfAP(0, 2, 3, 6));
}

main();