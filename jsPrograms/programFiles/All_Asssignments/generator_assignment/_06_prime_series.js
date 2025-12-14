const isPrime = (value) => {
  let divisor = 2;
  while (divisor <= Math.sqrt(value)) {
    if (value % divisor++ === 0) {
      return false;
    }
  }
  return true;
};

function* primeSeries() {
  let currentValue = 2;
  while (true) {
    if (isPrime(currentValue)) {
      yield currentValue;
    }
    currentValue++;
  }
}

const p1 = primeSeries();
