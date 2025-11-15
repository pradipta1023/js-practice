const doesAppearOnce = (value, index, flatAttendance) => {
  return flatAttendance.indexOf(value) === index;
};

const isBelow32 = (temperature) => {
  return temperature < 32;
};

const isBelow120 = (reading) => {
  return reading < 120;
};

const isPositive = (data) => {
  return data > 0;
}

const sum = (total, current) => {
  return total + current
};

const isExactlyOne = (value, index, data) => {
  return data.reduce((count, color) => {
    return color === value ? count + 1 : count;
  }, 0) === 1;
};

const noOfTimesReturnedDune = (count, book) => {
  return book.toLowerCase() === "dune" ? count + 1 : count;
};

const noOfTimesReturnedDeer = (count, animal) => {
  return animal.toLowerCase() === "deer" ? count + 1 : count;
};

const noOfTimesOccuredtrack1 = (count, track) => {
  return track.toLowerCase() === "track1" ? count + 1 : count;
};

const noOfTimesOrderedChocolate = (count, order) => {
  return order.toLowerCase() === "chocolate" ? count + 1 : count;
}

const uniqueItems = (result, currentElement) => {
  result.includes(currentElement) ? result : result.push(currentElement);
  return result;
};

const every = (data, predicate) => {
  const result = data.every(predicate);
  return result;
};

const some = (data, key) => {
  const result = data.flatMap(flat).some((element) => {return element > key});
  return result;
};

const filter = (data, predicate) => {
  const filteredData = data.filter(predicate);
  return filteredData;
};

const ingridients = [["cheese", "bread"], ["tomato"], ["bread"]];
const words = [["sky", "blue"], ["night"], ["sky", "dark"]];
const giftItems = [["toy", "sticker"], ["candy", "sticker"]];
const routine = [[6, 4], [3, 2]];
const fishTankMeasurement = [[5, 6], [7], [6], [9]];

const flat = item => item;

const findUniqueItems = (uniqueItems, element) => {
  uniqueItems.includes(element) ? uniqueItems : uniqueItems.push(element);
  return uniqueItems;
}

const reduce = (items, functionToUse, init) => {
  return items.flatMap(flat).reduce(functionToUse, init);
};

const uniqueIngridients = reduce(ingridients, findUniqueItems, []);

const uniqueWords = reduce(words, findUniqueItems, []);

const uniqueGifts = reduce(giftItems, findUniqueItems, []);

const totalCountOfRoutine = reduce(routine, sum, 0);

const ifAnyAbove7 = some(fishTankMeasurement, 7);

console.log(uniqueWords, uniqueIngridients, uniqueGifts, totalCountOfRoutine, ifAnyAbove7);

