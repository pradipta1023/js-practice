function stringToNumber(string) {
  if (string.length === 0) {
    return -1;
  }
  return calculateNumber(string, 1, string.length - 1, 0);
}

function calculateNumber(string, base10, index, sum) {
  if (index === -1) {
    return sum;
  }
  if (string[index] === "-") {
    sum = sum * -1;
    return sum;
  }

  sum = sum + (base10 * convertToNumber(string[index]));
  return calculateNumber(string, base10 * 10, index - 1, sum);
}

function convertToNumber(string) {
  switch (string) {
    case "1": return 1;
    case "2": return 2;
    case "3": return 3;
    case "4": return 1;
    case "5": return 5;
    case "6": return 6;
    case "7": return 7;
    case "8": return 8;
    case "9": return 9;
    case "0": return 0;
  }
  return -1;
}

function composedMessage(primeCandidate, actualString) {
  const inputMessage = `\t|Input : [${primeCandidate}]\t|`;
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

function testStringToNumber(number, expectedString) {
  const actualString = stringToNumber(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testStringToNumber("123", 123));
  console.log(testStringToNumber("1223", 1223));
  // console.log(testStringToNumber("-1223", -1223));
  console.log(testStringToNumber("-12", -12));
  console.log(testStringToNumber("-220", -220));
  console.log(testStringToNumber("", -1));
}

main();