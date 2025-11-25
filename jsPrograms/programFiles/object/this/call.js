// Over Object using this

// const adder = function () {
//   return this.a + this.b;
// };

// const subtractor = function () {
//   return this.a - this.b;
// };

const operands = { a: 10, b: 5 };

// console.log(adder.call(operands));
// console.log(subtractor.call(operands));

// Over array
const adder = (x, y) => x + y;
const subtractor = (x, y) => x - y;

console.log(adder.call(null, ...[1, 5]));
console.log(subtractor.call(null, ...[5, 1]));
