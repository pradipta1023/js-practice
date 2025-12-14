// [1,2,3,4,5] => [1,2,3,4,5,1,2,3,4,5,...]

function* cycle(items) {
  let i = 0;
  while (true) {
    yield items[i++ % items.length];
  }
}
