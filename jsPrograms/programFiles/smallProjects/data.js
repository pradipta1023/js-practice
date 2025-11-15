import * as operations from "./operation.js";

export const tests = [
  {
    description: "simple sum test",
    input: [2, 3],
    function: operations.sumOf,
    expected: 5,
  },
  {
    description: "empty test",
    input: [2, 3],
    function: operations.sumOf,
    expected: 5,
  },
  {
    description: "simple multiplication test",
    input: [2, 3],
    function: operations.multiplicationOf,
    expected: 6,
  },
  {
    description: "empty test",
    input: [],
    function: operations.multiplicationOf,
    expected: 1,
  },
];
