function generateLine(length, middle = "*", start = "*", end = "*") {
  if (length <= 2) {
    return (start + end).slice(length);
  }

  return start + middle.repeat(length - 2) + end;
}

function generateHollowLine(length) {
  return generateLine(length, " ");
}

function filledRectangle(dimensions) {
  const rows = dimensions[0];
  const columns = dimensions[1];
  const pattern = [];
  for (let row = 1; row <= rows; row++) {
    const singleLine = generateLine(columns);
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

function hollowRectangle(dimensions) {
  const rows = dimensions[0];
  const columns = dimensions[1];
  const pattern = [];
  pattern.push(generateLine(columns));
  for (let row = 2; row < rows; row++) {
    const singleLine = generateHollowLine(columns);
    pattern.push(singleLine);
  }
  pattern.push(generateLine(columns));
  return pattern.slice(0, rows).join("\n");
}

console.log(filledRectangle([2, 4]));
// console.log(hollowRectangle([4, 4]));