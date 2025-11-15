const calculator = function(operation, operand1, operand2) {
  return operation(operand1, operand2);
}

const add = function(operand1, operand2) {
  return operand1 + operand2;
}

const subtract = function(operand1, operand2) {
  return operand1 - operand2;
}

const multiplication = function(operand1, operand2) {
  return operand1 * operand2;
}

const division = function(operand1, operand2) {
  return operand1 / operand2;
}

function main() {
  console.log(calculator(add, 10, 5));
  console.log(calculator(subtract, 10, 5));
  console.log(calculator(multiplication, 10, 5));
  console.log(calculator(division, 10, 5));
}

main();