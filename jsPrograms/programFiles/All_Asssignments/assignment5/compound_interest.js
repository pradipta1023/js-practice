function compoundInterest(principal, rateOfInterest, year) {
  if (year === 0) {
    return 1;
  }
  const newPrincipal = principal + (principal * rateOfInterest) / 100;
  return interest + compoundInterest(newPrincipal, rateOfInterest, year - 1);
}

function composedMessage(nthTerm, actualString) {
  const inputMessage = `\t|Input : [${nthTerm}]`;
  const outputMessage = `\n\t|\n\t|Output : ${actualString}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\n\t|Expected output : " + expectedString;
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

function testCompoundInterest(principal, rateOfInterest, year, expectedString) {
  const actualString = compoundInterest(principal, rateOfInterest, year);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log()
}

main();