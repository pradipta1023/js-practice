const sumOfTwo = (...items) => {
  const [x, y] = items;
  return x + y;
};

console.log(sumOfTwo(1, 2));
console.log(sumOfTwo(5, 5));
