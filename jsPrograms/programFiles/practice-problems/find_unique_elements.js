const array = [1, 2, 3, 1];

const isRepetition = (items) => {
  return items.some((data) => data.some);
};

// const newArray = [];
// for (const element of items) {
//   if (newArray.includes(element)) {
//     return true;
//   }
//   newArray.push(element);
// }
// return false;

const isRepetingElements = isRepetition(array);

console.log(isRepetingElements);
