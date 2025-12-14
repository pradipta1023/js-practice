// [1,2,3,4] => [[1,2],[3,4]];

function* chunk(items, noOfElements = 2, overlap = 0) {
  let i = 0;
  while (i < items.length - overlap) {
    const portion = items.slice(i, i + noOfElements);
    i = i + noOfElements - overlap;
    console.log({ i, portion, length: items.length });
    yield portion;
  }
}

const chunked = chunk([1, 2, 3, 4, 5], 3, 1);
