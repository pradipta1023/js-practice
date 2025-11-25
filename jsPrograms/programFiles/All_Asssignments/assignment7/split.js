// Given a string and a single-character delimiter, returns an array of strings
// obtained by splitting the input string at each occurrence of the delimiter.
// The delimiter must be a single character.
// Examples:
// split("a,b,c", ",") => ["a", "b", "c"]
// split("one:two:three", ":") => ["one", "two", "three"]
// split("hello", ",") => ["hello"]
function split(sentence, delimeter) {
  const splittedString = [];
  let indexAfterDelimeter = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] === delimeter) {
      splittedString.push(sentence.slice(indexAfterDelimeter, index));
      indexAfterDelimeter = index + 1;
    }
  }

  splittedString.push(sentence.slice(indexAfterDelimeter, sentence.length));
  return splittedString;
}

function isArray(value) {
  return typeof value === "object";
}

function isSameArray(array1, array2, index) {
  if (index > array1.length) {
    return true;
  }
  if (isArray(array1[index])) {
    return isSameArray(array1[index], array2[index], 0);
  }
  if (array1[index] !== array2[index]) {
    return false;
  }
  return isSameArray(array1, array2, index + 1);
}

function areDeepEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  if (isArray(array1) !== isArray(array2)) {
    return false;
  }

  return isSameArray(array1, array2, 0);
}

function composedMessage(sentence, delimeter, actual) {
  const inputMessage = `\t|Input : [[${sentence}], [${delimeter}]]`;
  const outputMessage = `\n\t|\n\t|Output : ${actual}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSame, fragmentMsg, expected, testDesc) {
  const expectation = "\n\t|Expected output : " + expected;
  const emojiForFailedCase = `----------\n❌ ${testDesc}\n`;
  const failedCase = emojiForFailedCase + fragmentMsg + expectation;

  if (isSame) {
    return messageForPassedCase(testDesc);
  }

  return failedCase;
}

function messageForPassedCase(testDesc) {
  return `✅ ${testDesc}`;
}

function testSplit(sentence, delimeter, expected, testDesc) {
  const actual = split(sentence, delimeter, 0);
  const fragmentMsg = composedMessage(sentence, delimeter, actual);
  const isSame = areDeepEqual(actual, expected, 0);
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testSplit("a,b,c", ",", ["a", "b", "c"], "simple check"));
  console.log(testSplit("one:two:three", ":", ["one", "two", "three"],));
  console.log(testSplit("hello", ",", ["hello"], "simple check"));
  console.log(testSplit("apple:mango", ":", ["apple", "mango"], "with colon"));
  console.log(testSplit(",", ",", ["", ""], "with colon"));
  console.log(testSplit("", ",", [""], "with colon"));
}

main();