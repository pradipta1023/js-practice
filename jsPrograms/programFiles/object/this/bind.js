// const adder = function (x, y) {
//   return x + y;
// };

// const addTwo = adder.bind(null, 2);

// const addFive = adder.bind(null, 5);
// // function(y) {
// // return 2+y
// // }

// // const addSeven = addFive.bind(addTwo);

// console.log([1, 2, 3, 4, 5, 6, 7].map(addFive));
// console.log([1, 2, 3, 4, 5, 6, 7].map(addTwo));

// Reveres
// [].reduce.call("abc",(x,y)=>y+x, '');

// charWithItsIndex
// [].map.call("abc",(x,i)=>i+x).join("");

// const includes = function (x) {
//   return this.includes(x);
// };

// const a = includes.bind([4, 3, 2, 1]);

// console.log([1, 2, 3, 4, 5, 6, 1, 2, 3].filter(a));

// const includes = [].includes.bind([1, 2, 3, 4]);

// console.log([1, 2, 3, 4, 5, 6, 1, 2, 3].map(includes));
// console.log([1, 2, 3, 4, 5, 6, 1, 2, 3].filter(includes));

// const isVowel = [].includes.bind("aeiouAEIOU");

// // log this with string as arg for call
// console.log([].filter.call("abeiou", (el) => isVowel(el)));

// const createInc = function () {
//   return ++this.i;
// };

// const inc = createInc.call({ i: 0 });
// const incArr = createInc.apply({ i: 10 }, [1, 2]);

// const fixed = createInc.bind({ i: 0 });

// const people = {
//   firstName: "ABCD",
//   lastName: "EFGH",
//   getName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

const points = {
  point: 15,
  getPoint: function () {
    return (() => {
      return this.point;
    });
  },
};

const fn = points.getPoint;
fn();
fn({ point: 123 });
