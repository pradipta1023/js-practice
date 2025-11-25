/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function replace(text, match, replacement) {
  let updatedText = '';

  for (let index = 0; index < text.length; index++) {
    const isMatch = text[index] === match;
    updatedText += isMatch ? replacement : text[index];
  }

  return updatedText;
}

function composedMessage(text, match, replacement, actualOutput) {
  const textMessage = "\nGiven text:" + text;
  const matchMessage = "\nGiven match:" + match;
  const replaceMessage = "\nTo replace with: " + replacement;
  const outputMessage = "\n\nOutput:" + actualOutput;
  return textMessage + matchMessage + replaceMessage + outputMessage;
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

function testReplace(text, match, replacement, expectedOutput) {
  const output = replace(text, match, replacement);
  const fragmentMessage = composedMessage(text, match, replacement, output);
  const isSame = output === expectedOutput;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedOutput);
  return message;
}

function main() {
  console.log(testReplace('hello world', 'l', 'n', 'henno wornd'));
  console.log(testReplace('hello world', '', 'n', 'hello world'));
  console.log(testReplace('no spaces in', ' ', '_', 'no_spaces_in'));
  console.log(testReplace('no spaces in here', 'o', '', 'n spaces in here'));
  console.log(testReplace('no spaces in', ' ', '_', 'no_spaces_in'));
  console.log(testReplace('', 'd', 'e', ''));
}

main();