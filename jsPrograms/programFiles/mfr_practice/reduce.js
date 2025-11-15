const longestString = function (string1, string2) {
  return string1.length > string2.length ? string1 : string2;
}

const join = function (string1, string2) {
  return string1 + string2;
}

const multiply = function (operand1, operand2) {
  return operand1 * operand2;
}

const reduce = function (data, predicate, intitialValue) {
  let result = intitialValue;

  for (const element of data) {
    result = predicate(result, element)
  }

  return result;
}

function composedMessage(numbers, actual) {
  const inputMessage = `\t|Input : [${numbers}]`;
  const outputMessage = `\n\t|\n\t|Output : ${actual}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSame, fragmentMsg, expected, testDesc) {
  const expectation = "\n\t|Expected output : " + expected;
  const emojiForFailedCase = `----------\n❌ ${testDesc}\n`;
  const failedCase = emojiForFailedCase + fragmentMsg + expectation;

  if (isSame) {
    return successMessage(testDesc);
  }

  return failedCase;
}

function successMessage(testDesc) {
  return `✅ ${testDesc}`;
}

function testReduce(data, expected, task, initialValue, testDesc) {
  const actual = reduce(data, task, initialValue);
  const fragmentMsg = composedMessage(expected, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function tetstLongestString() {
  console.log(testReduce(["Hello", "India", "Good Bye"], "Good Bye", longestString, "", "above 3"));
  console.log(testReduce(["Pakistan", "United States Of Emirates", "United Kingdom"], "United States Of Emirates", longestString, "", "countries"));
}

function testJoin() {
  console.log(testReduce(["a", "b", "c"], "abc", join, "", "add abc"));
  console.log(testReduce(["I", "C", "U"], "ICU", join, "", "add ICU"));
}

function testMultiplyOfArray() {
  console.log(testReduce([2, 3, 5], 30, multiply, 1, "simple multiply"));
  console.log(testReduce([10, 2, 30], 600, multiply, 1, "large multiply"));
}

function main() {
  tetstLongestString();
  testJoin();
  testMultiplyOfArray();
}

main();