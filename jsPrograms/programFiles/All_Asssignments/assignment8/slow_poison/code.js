export function generateLine(length, middle = "*", start = "*", end = "*") {
  if (length <= 2) {
    return (start + end).slice(0, length);
  }

  return start + middle.repeat(length - 2) + end;
}

export function generateHollowLine(length) {
  return generateLine(length, " ");
}

export function generateSpacedAlternatingRectangle(dimensions) {
  const rows = dimensions[1];
  const columns = dimensions[0];
  const pattern = [];
  for (let row = 0; row < rows; row++) {
    const singleLine = generateAlternatingLine(
      columns,
      generateSymbol(row, "*- "),
    );
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

export function generateAlternatingRectangle(dimensions) {
  const rows = dimensions[1];
  const columns = dimensions[0];
  const pattern = [];
  for (let row = 1; row <= rows; row++) {
    const singleLine = generateAlternatingLine(columns, generateSymbol(row));
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

export function generateSymbol(value, symbol = "-*") {
  return symbol[value % symbol.length];
}

export function generateAlternatingLine(length, char) {
  return generateLine(length, char, char, char);
}

export function generateTrianglePattern(size) {
  const pattern = [];
  for (let row = 1; row <= size; row++) {
    const singleLine = generateLine(row);
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

export function generateRightAngledTriangle(size) {
  const pattern = [];
  for (let row = 1; row <= size; row++) {
    const singleLine = generateLine(row).padStart(size);
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

export function generateFilledRectangle(dimensions) {
  const rows = dimensions[1];
  const columns = dimensions[0];
  const pattern = [];
  for (let row = 1; row <= rows; row++) {
    const singleLine = generateLine(columns);
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

export function generateHollowRectangle(dimensions) {
  const rows = dimensions[1];
  const columns = dimensions[0];
  const pattern = [];
  pattern.push(generateLine(columns));
  for (let row = 2; row < rows; row++) {
    const singleLine = generateHollowLine(columns);
    pattern.push(singleLine);
  }
  pattern.push(generateLine(columns));
  return pattern.slice(0, rows).join("\n");
}
