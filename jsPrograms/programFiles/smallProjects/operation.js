const sum = (operand1, operand2) => operand1 + operand2;

export const sumOf = (items) => {
  return items.reduce(sum, 0);
};

const multiply = (operand1, operand2) => operand1 * operand2;

export const multiplicationOf = (items) => {
  return items.reduce(multiply, 1);
};
