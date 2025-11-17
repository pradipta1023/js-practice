// const cycler = (something, i = 0) => () => something[i++ % something.length];

// const someFn = cycler([0, "green", "blue"]);

// [1, 2, 3, 4, 5].filter(someFn).reduce(someFn);

// const juxt = (f, sr, i, s, df) => (x) => [f, sr, i, s, df].map((a) => a(x));

// const identity = (x) => x;

// const square = (x) => x ** 2;

// const fact = (x) => x <= 1 ? 1 : x * fact(x - 1);

// const doubleFact = (x) => x <= 1 ? 1 : x * doubleFact(x - 2);

// const values = juxt(fact, Math.sqrt, identity, square, doubleFact);

// console.log(values(4));
// console.log(values(9));
// console.log(values(16));

// const isBetween = (x, y) => (z) => x <= z && y >= z;

// TRIANGLE
// const pattern = (item) => (noOfTimes) => item.repeat(noOfTimes);

// const stars = pattern("*");

// const dashes = pattern("-");

// const cycler = (something, i = 0) => something[i++ % something.length];

// const someFn = cycler([dashes]);
// console.log([1, 3, 5, 7, 9, 11].map(someFn).join("\n"));

// ALTERNATING PATTERN
// const pattern = (item) => (noOfTimes) => item.repeat(noOfTimes);

// const stars = pattern("*");

// const dashes = pattern("-");

// const cycler = (something, i = 0) => () =>
//   something[i++ % something.length](10);

// const someFn = cycler([stars, dashes]);
// console.log(Array(5).fill(0).map(someFn).join("\n"));

const pattern = (item) => (noOfTimes) => item.repeat(noOfTimes);

const stars = pattern("*");

const spaces = pattern("  ");

const cycler = (something, i = 0) => (x) =>
  something[i++ % something.length](x);

const someFn = cycler([stars, spaces]);
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].map(someFn).join("\n"));
