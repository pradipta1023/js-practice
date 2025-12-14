// [1,2,3,4,5] => [[1,2],[2,3],[3,4],[4,5]]

function* pair(items) {
  let i = 0;

  while (i < items.length - 1) {
    yield items.slice(i, i++ + 2);
  }
}

const main = () => {
  const consecutivePairs = pair([1, 2, 3, 4, 5]);
  console.log([...consecutivePairs]);
};

main();
