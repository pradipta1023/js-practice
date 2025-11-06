/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function isDivisible(number, divisor) {
  return number % divisor === 0;
}

function fizzBuzz(number) {
  const isDivisibleBy3 = isDivisible(number, 3);
  const isDivisibleBy5 = isDivisible(number, 5);
  const isDivisibleBy3And5 = isDivisible(number, 3) && isDivisible(number, 5);
  if (isDivisibleBy3And5) {
    return "fizzbuzz";
  }
  if (isDivisibleBy3) {
    return "fizz";
  }
  if (isDivisibleBy5) {
    return "buzz";
  }
  return number + "";
}

function composedMessage(number, actualString) {
  const givenNumberMessage = "\nGiven number:" + number;
  return givenNumberMessage + "\n\nString:" + actualString;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedString) {
  const expectation = "\nExpected string:" + expectedString;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function testFizzBuzz(number, expectedString) {
  const actualString = fizzBuzz(number);
  const fragmentMessage = composedMessage(number, actualString);
  const isSame = actualString === expectedString;
  const message = generateFailOrPass(isSame, fragmentMessage, expectedString);
  return message;
}

function main() {
  console.log(testFizzBuzz(3, "fizz"));
  console.log(testFizzBuzz(5, "buzz"));
  console.log(testFizzBuzz(15, "fizzbuzz"));
  console.log(testFizzBuzz(7, "7"));
  console.log(testFizzBuzz(8, "8"));
  console.log(testFizzBuzz(45, "fizzbuzz"));
}

main();