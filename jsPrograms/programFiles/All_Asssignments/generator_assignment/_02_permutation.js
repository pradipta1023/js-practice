// [1,2,3,4,5] => [[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],...]
function* pair1(items) {
  let i = 0;

  while (i < items.length - 1) {
    let j = i + 1;
    while (j < items.length) {
      yield [items[i], items[j++]];
    }
    i++;
  }
}

const p1 = pair1([1, 2, 3, 4, 5]);
