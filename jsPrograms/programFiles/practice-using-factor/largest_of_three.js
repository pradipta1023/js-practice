function max(a, b) {
  return a > b ? a : b;
}

function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

const firstNumber = 12;
const secondNumber = 35;
const thirdNumber  = 21;

console.log(maxOfThree(firstNumber, secondNumber, thirdNumber));
