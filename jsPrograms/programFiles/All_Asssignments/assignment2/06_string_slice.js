/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function generateSlice(text, index, end) {
  let sliceText = '';

  while (index <= end && index < text.length) {
    sliceText = sliceText + text[index];
    index++;
  }

  return sliceText;
}

function slice(text, start, end) {
  const index = start < 0 ? 0 : start;

  if (0 === text.length) {
    return '';
  }

  return generateSlice(text, index, end);
}

function composedMessage(text, start, end, actualOutput) {
  const givenTextMessage = "\nGiven text:" + text;
  const startMessage = "\nGiven start:" + start;
  const endMessage = "\nGiven end: " + end;
  const outputMessage = "\n\nOutput:" + actualOutput;
  return givenTextMessage + startMessage + endMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedOutput) {
  const expectation = "\nExpected string:" + expectedOutput;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testSlice(text, start, end, expectedOutput) {
  const actualOutput = slice(text, start, end);
  const fragmentMessage = composedMessage(text, start, end, actualOutput);
  const isSame = actualOutput === expectedOutput;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedOutput);
  return message;
}

function main() {
  console.log(testSlice('hello world', 0, 4, 'hello'));
  console.log(testSlice('negative start', -1, 8, 'negative '));
  console.log(testSlice('negative start', -1, -1, ''));
  console.log(testSlice('Hello World', -1, 0, 'H'));
  console.log(testSlice('Happy Durga Puja', 6, 17, 'Durga Puja'));
  console.log(testSlice('Hello World', 0, 100, 'Hello World'));
  console.log(testSlice('Bengaluru', 4, 6, 'alu'));
  console.log(testSlice('', 0, 10, ''));
  console.log(testSlice('dey', 4, 4, ''));
  console.log(testSlice('ghosh', 3, 14, 'sh'));
}

main(); 