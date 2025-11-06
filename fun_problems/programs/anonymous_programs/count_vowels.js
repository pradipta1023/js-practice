function countVowels(string, index) {
  if(index === string.length) {
    return 0;
  }
  if(isVowel(string[index])) {
    return 1 + countVowels(string, index + 1);
  }
  return countVowels(string, index + 1);
}

function isVowel(char) {
  const vowels = "aeiouAEIOU";
  return vowels.includes(char);
}

function composedMessage(string, actual) {
  const inputMessage = `\t|Input : [${string}]`;
  const outputMessage = `\n\t|\n\t|Output : ${actual}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentMsg, expected, testDesc) {
  const expectation = "\n\t|Expected output : " + expected;
  const emojiForFailedCase = `----------\n❌ ${testDesc}\n`;
  const failedCase = emojiForFailedCase + fragmentMsg + expectation;

  if (isSameResult) {
    return messageForPassedCase(testDesc);
  }

  return failedCase;
}

function messageForPassedCase(testDesc) {
  return `✅ ${testDesc}`;
}

function testCountVowels(string, expected, testDesc) {
  const actual = countVowels(string, 0);
  const fragmentMsg = composedMessage(string, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function main() {
  console.log(testCountVowels("aaa", 3, "all 3 are vowels"));
  console.log(testCountVowels("abcdg", 1, "single vowel at start"));
  console.log(testCountVowels("dfgaei", 3, "ends with 3 vowels"));
  console.log(testCountVowels("Umbrella", 3, "mixed in bwtween"));
  console.log(testCountVowels("aeiouAEIOU", 10, "All vowels"));
  console.log(testCountVowels("wdghskmndb", 0, "No vowels"));
}

main();