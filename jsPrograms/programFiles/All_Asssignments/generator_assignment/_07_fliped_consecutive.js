// [1,2,3,4] => [2,1,4,3]

function* flipedCons(items) {
  let i = 0;
  while (i < items.length) {
    if (!(i & 1)) yield items[i + 1];
    else yield items[i - 1];
    i++;
  }
}

const flipedConsecutive = flipedCons([1, 2, 3, 4]);
