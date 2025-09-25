function generateReverse(term) {
  let input = term;
  let reverseOfInput = 0;
  
  while(input !== 0) {
    const remainder = input % 10;
    reverseOfInput = reverseOfInput * 10 + remainder;
    input = (input - remainder) / 10;
  }

  return reverseOfInput;
}

function isPalindrome(givenTerm) {
  const reverseOfTerm = generateReverse(givenTerm);
  const isPalindrome = reverseOfTerm === givenTerm;
  return isPalindrome;

}

function composedMessage(givenTerm, isPalindromeOrNot) {
  const isPalindromeMessage = "\nIs palindrome:" + isPalindromeOrNot;
  return "Given term:" + givenTerm + isPalindromeMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedResult) {
  const expectation = "\nExpected output:" + expectedResult;
  const failedCase = "Incorrect --> ❌\n" + fragmentedMessage + expectation;
  const passedCase = "Correct --> ✅\n" + fragmentedMessage + expectation;

  if(isSameResult) {
    return passedCase;
  }
  return failedCase;
}


function testIsPalindrome(givenTerm, expectedOutput) {
  const actualOutput = isPalindrome(givenTerm);
  const fragmentedMessage = composedMessage(givenTerm, actualOutput);
  const isSameOutput = expectedOutput === actualOutput;
  const message = generateFailOrPass(isSameOutput, fragmentedMessage, expectedOutput);
  return message;
}

function main() {
  console.log(testIsPalindrome(1, true));
  console.log(testIsPalindrome(121, true));
  console.log(testIsPalindrome(276, false));
  console.log(testIsPalindrome(272, true));
  console.log(testIsPalindrome(9, true));
  console.log(testIsPalindrome(200, false));
}

main();
