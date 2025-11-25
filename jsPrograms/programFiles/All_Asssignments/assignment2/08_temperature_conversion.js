/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function FToC(Ferenhite) {
  return (Ferenhite - 32) * 5 / 9;
}

function KToC(Kelvin) {
  return Kelvin - 273.15;
}

function CToK(Celcious) {
  return Celcious + 273.15;
}

function CToF(Celcious) {
  return ((9 * Celcious) / 5) + 32;
}

function FToK(Ferenhite) {
  const Celcious = FToC(Ferenhite);
  return CToK(Celcious);
}

function KToF(Kelvin) {
  const Celcious = KToC(Kelvin);
  return CToF(Celcious);
}

function FToOther(to, value) {
  const actualValue = value * 1;

  if (to === "C") {
    return FToC(actualValue);
  } else if (to === "K") {
    return FToK(actualValue);
  } else {
    return "NaN";
  }
}

function CToOther(to, value) {
  const actualValue = value * 1;

  if (to === "K") {
    return CToK(actualValue);
  } else if (to === "F") {
    return CToF(actualValue);
  } else {
    return "NaN";
  }
}

function KToOther(to, value) {
  const actualValue = value * 1;

  if (to === "F") {
    return KToF(actualValue);
  } else if (to === "C") {
    return KToC(actualValue);
  } else {
    return "NaN";
  }
}

function convert(from, to, value) {
  if (from === to && (from === "K" || from === "F" || from === "C")) {
    return 0;
  }
  if (from === "F") {
    return FToOther(to, value);
  }
  if (from === "K") {
    return KToOther(to, value);
  }
  if (from === "C") {
    return CToOther(to, value);
  }
  return "NaN";
}

function composedMessage(from, to, value, actualOutput) {
  const fromMessage = "\nFrom:" + from;
  const toMessage = "\nTo:" + to;
  const valueMessage = "\nValue: " + value;
  const outputMessage = "\n\nOutput:" + actualOutput;
  return fromMessage + toMessage + valueMessage + outputMessage;
}

function generateFailOrPass(isSameResult, fragmentedMessage, expectedOutput) {
  const expectation = "\nExpected result:" + expectedOutput;
  const emojiForFailedCase = "----------\nIncorrect --> ❌\n";
  const emojiForPassedCase = "----------\nCorrect --> ✅\n";
  const failedCase = emojiForFailedCase + fragmentedMessage + expectation;
  const passedCase = emojiForPassedCase + fragmentedMessage + expectation;

  if (isSameResult) {
    return passedCase;
  }

  return failedCase;
}

function isApproximatelyEqual(firstValue, secondValue) {
  const toleranceCheck = firstValue - secondValue;
  return toleranceCheck <= 0.01 && toleranceCheck >= -0.01;
}

function resultForm(actualResult, expectedResult) {
  if (actualResult === expectedResult) {
    return true;
  }

  return isApproximatelyEqual(actualResult, expectedResult);
}

function testConvert(from, to, value, expectedResult) {
  const actualResult = convert(from, to, value);
  const fragmentMessage = composedMessage(from, to, value, actualResult);
  const isSame = resultForm(actualResult, expectedResult);
  const message = generateFailOrPass(isSame, fragmentMessage, expectedResult);
  return message;
}

function main() {
  console.log(testConvert('C', 'K', "0", 273.15));
  console.log(testConvert('C', 'F', "37", 98.6));
  console.log(testConvert('F', 'K', "98.6", 310.15));
  console.log(testConvert('F', 'C', "-40", -40));
  console.log(testConvert('K', 'C', "100", -173.15));
  console.log(testConvert('K', 'F', "100", -279.67));
  console.log(testConvert('K', 'K', "100", 0));
  console.log(testConvert('X', 'K', "0", "NaN"));
  console.log(testConvert('C', 'Y', "0", "NaN"));
  console.log(testConvert('C', 'C', "0", 0));
  console.log(testConvert('X', 'X', "10", "NaN"));
}

main();