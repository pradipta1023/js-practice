/*
  Implement the below function to count number of vowels present in the
  give sentence.
  Examples:
  countVowels("hello world") returns 3
  countVowels("hEllo wOrld") returns 3
*/

function countVowels(sentence) {
  let noOfVowels = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (isVowel(sentence[index])) {
      noOfVowels++;
    }
  }
  return noOfVowels;
}

function isVowel(character) {
  switch (character) {
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":
    case "U": return true;
  }
  return false;
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

function testCountVowels(number, expectedString) {
  const actualString = countVowels(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testCountVowels("aeiou AEIOU", 10));
  console.log(testCountVowels("Hello", 2));
  console.log(testCountVowels("Hello how are you", 7));
  console.log(testCountVowels("I am Pradipta", 5));
  console.log(testCountVowels("", 0));
  console.log(testCountVowels("b", 0));
  console.log(testCountVowels("eeeee", 5));
  console.log(testCountVowels("1", 0));
  console.log(testCountVowels("AE12", 2));
}

main();