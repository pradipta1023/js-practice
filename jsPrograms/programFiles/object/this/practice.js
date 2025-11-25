// const add = function () {
//   return this.adder();
// };

// const addDetails = {
//   b: 8,
//   a: 10,
//   adder: function () {
//     return this.a + this.b;
//   },
// };

// console.log(add.call(addDetails));

const operation = (i = 0) => ({
  increment: (() => ++i),
  decrement: (() => Math.max(--i), 0),
  identity: (() => Math.max(i, 0)),
});
const counter = operation();

counter.increment();
