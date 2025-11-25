/*
  Implement the below function to reverse the given sentence.
  Examples:
  reverseString("hello") returns "olleh"
*/

function reverseString(sentence) {
  let reverseOfString = '';
  for (let index = sentence.length - 1; index >= 0; index--) {
    reverseOfString = reverseOfString + sentence[index];
  }

  return reverseOfString;
}

function composedMessage(number, actualString) {
  const givenNumberMessage = "\nGiven String:" + number;
  return givenNumberMessage + "\n\nOutput:" + actualString;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\nExpected output:" + expectedString;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testReverseString(number, expectedString) {
  const actualString = reverseString(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testReverseString("aeiou AEIOU", "UOIEA uoiea"));
  console.log(testReverseString("pradipta", "atpidarp"));
  console.log(testReverseString("sagnik", "kingas"));
  console.log(testReverseString("ajoy", "yoja"));
  console.log(testReverseString("I am Pradipta", "atpidarP ma I"));
  console.log(testReverseString(" I.", ".I "));
  console.log(testReverseString("1234", "4321"));
  console.log(testReverseString("hello", "olleh"));

}

main();