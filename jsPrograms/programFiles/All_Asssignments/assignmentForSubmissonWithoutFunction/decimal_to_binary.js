// Do not rename a, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const a = 8;

// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let decimalNumber = a;
let remainder = 0;

while (decimalNumber !== 0) {
  remainder = decimalNumber % 2;
  decimalNumber = (decimalNumber - remainder) / 2; 
  console.log(remainder);
}

if (remainder === 0) {
  console.log(remainder);
}