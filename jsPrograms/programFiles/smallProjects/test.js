import { tests } from "./data.js";

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

const expectation = (expected) => {
  return "\n\t|Expected output : " + expected;
};

const failedEmojiMessage = (desc) => {
  return `----------\n❌ ${desc}\n`;
};

const failedMessage = (actual, testDetails) => {
  return failedEmojiMessage(testDetails.description) +
    composedMessage(testDetails.input, actual) +
    expectation(testDetails.expected);
};

function hasSucceeded(areSameResults, actual, testDetails) {
  return areSameResults
    ? successMessage(testDetails.description)
    : failedMessage(actual, testDetails);
}

function successMessage(desc) {
  return `✅ ${desc}`;
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

const test = (testDetails) => {
  const actual = testDetails.function(testDetails.input);
  const areSameResults = areDeepEqual(actual, testDetails.expected);
  const message = hasSucceeded(
    areSameResults,
    actual,
    testDetails,
  );
  return message;
};

const testAll = () => {
  tests.map((testDetails) => console.log(test(testDetails)));
};

const main = () => {
  testAll();
};

main();
