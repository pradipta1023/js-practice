const adder = (x, y) => x + y;
const subtractor = (x, y) => x - y;

console.log(adder.apply(null, [10, 5]));
console.log(subtractor.apply(null, [15, 1]));
