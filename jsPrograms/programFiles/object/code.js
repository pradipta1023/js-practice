const sum = (x, y) => x + y;

export const sumOf = (items) => items.reduce(sum, 0);

const multiply = (x, y) => x * y;

export const multiplicationOf = (items) => items.reduce(multiply, 1);
