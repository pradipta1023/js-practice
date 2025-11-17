const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const remainder = (x, y) => x % y;

const operations = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  remainder: remainder,
};

const calculate = (f, x, y) => operations[f](x, y);

const takePrompt = () => {
  const userPrompt = prompt("[Operation, operand1, operand2]: ");
  let [operation, operand1, operand2] = userPrompt.split(" ");

  operand1 = parseInt(operand1);
  operand2 = parseInt(operand2);
  return [operation, operand1, operand2];
};

const calculator = () => {
  while (true) {
    const [operation, operand1, operand2] = takePrompt();
    console.log(calculate(operation.toLowerCase(), operand1, operand2));
  }
};

calculator();
