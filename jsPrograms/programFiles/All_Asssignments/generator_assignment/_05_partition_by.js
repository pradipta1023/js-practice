// [1,1,1,2,2,1,1,3,3,2] => [[1,1,1],[2,2],[1,1],[3,3],[2]]

const identity = (currentValue, lastValue) => lastValue === currentValue;

const isEven = (currentValue, lastValue) => {
  const isLastValueEven = lastValue & 1;
  const isCurrentValueEven = currentValue & 1;
  return isLastValueEven === isCurrentValueEven;
};

function* partitionBy(items, predicate) {
  let i = 0;
  let chunk = [];
  while (i < items.length) {
    if ((chunk.length === 0) || predicate(items[i], chunk.at(-1))) {
      chunk.push(items[i++]);
    } else {
      yield chunk;
      chunk = [items[i++]];
    }
  }
  yield chunk;
}

const identityBy = partitionBy([1, 1, 1, 2, 2, 1, 1, 3, 3, 2], identity);
const isEvenBy = partitionBy([1, 1, 1, 2, 2, 1, 1, 3, 3, 2], isEven);
