// Do not rename a or b, use them as input for your program.
// While testing we will change their values.

const a = 10;
const b = 5;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let hcfValue = 1;
let minOfTwoValue = a > b ? b : a;

for (let divisor = 1; divisor <= minOfTwoValue; divisor++) {
  if (a % divisor === 0 && b % divisor === 0) {
    hcfValue = divisor;
  }
}

hcfValue = (a === 0) ? b : hcfValue;
hcfValue = (b === 0) ? a : hcfValue;

console.log(hcfValue);