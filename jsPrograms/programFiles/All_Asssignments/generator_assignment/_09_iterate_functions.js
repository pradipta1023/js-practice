const mulByTwo = (x) => x * 2;

function* iterate(mulByTwo, x) {
  while (true) {
    x = mulByTwo(x);
    yield x;
  }
}

const mulBy2 = iterate(mulByTwo, 2);
