import * as operations from "./code.js";

const testDetails = {};
// description: "",
// data: ,
// function: ,
// expected: ,

function areDeepEqual(actual, expected, index) {
  if (!Array.isArray(actual)) {
    return actual === expected;
  }
  if (index === actual.length) {
    return true;
  }
  if (actual.length !== expected.length) {
    return false;
  }
  if (!isEqual(actual[index], expected[index])) {
    return false;
  }
  return areDeepEqual(actual, expected, index + 1);
}

const expectation = () => {
  return "\n\t|Expected output : " + testDetails.expected;
};

const fragmentMsg = (actual) => {
  return composedMessage(testDetails.data, actual);
};

const failedEmojiMessage = () => {
  return `----------\n❌ ${testDetails.description}\n`;
};

const failedMessage = (actual) => {
  return failedEmojiMessage() + fragmentMsg(actual) + expectation();
};

function hasSucceeded(isSame, actual) {
  if (!isSame) {
    return failedMessage(actual);
  }

  return successMessage();
}

function successMessage() {
  return `✅ ${testDetails.description}`;
}

function composedMessage(input, output) {
  const inputMessage = `\t|Input : [${input}]`;
  const outputMessage = `\n\t|\n\t|Output : ${output}\t\t`;
  return inputMessage + outputMessage;
}

// const dbg = (x) => {
//   console.log(x);
//   return x;
// };

const test = () => {
  const actual = testDetails.function(testDetails.data);
  const isSame = areDeepEqual(actual, testDetails.expected);
  const message = hasSucceeded(isSame);
  return message;
};

const setTestFunc = (desc, data, expected, testFunction) => {
  testDetails.description = desc;
  testDetails.data = data;
  testDetails.function = testFunction;
  testDetails.expected = expected;
};

const testSumOf = () => {
  setTestFunc("simple sum test", [2, 3], 5, operations.sumOf);
  console.log(test());
  setTestFunc("empty check", [], 0, operations.sumOf);
  console.log(test());
};

const testMultiplicationOf = () => {
  const multiplicationOf = operations.multiplicationOf;
  setTestFunc("simple multiplication test", [2, 30], 60, multiplicationOf);
  console.log(test());
  setTestFunc("empty check", [], 1, multiplicationOf);
  console.log(test());
};

const main = () => {
  testSumOf();
  testMultiplicationOf();
};

main();
