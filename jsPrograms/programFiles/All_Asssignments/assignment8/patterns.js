function generatePattern(style, dimensions) {
  if (areEmptyDimensions(dimensions)) {
    return "";
  }
  switch (style) {
    case "filled-rectangle": return generateFilledRectangle(dimensions);
    case "hollow-rectangle": return generateHollowRectangle(dimensions);
    case "alternating-rectangle":
      return generateAlternatingRectangle(dimensions);
    case "spaced-alternating-rectangle":
      return generateSpacedAlternatingRectangle(dimensions);
    case "triangle": return generateTrianglePattern(dimensions[0]);
    case "right-aligned-triangle":
      return generateRightAngledTriangle(dimensions);
    case "diamond": return generateDiamond(dimensions);
  }
}

function generateLine(length, middle = "*", start = "*", end = "*") {
  if (length <= 2) {
    return (start + end).slice(0, length);
  }

  return start + middle.repeat(length - 2) + end;
}

function generateHollowLine(length) {
  return generateLine(length, " ");
}

function generateSpacedAlternatingRectangle(dimensions) {
  const rows = dimensions[1];
  const columns = dimensions[0];
  const pattern = [];
  for (let row = 0; row < rows; row++) {
    const singleLine = generateAlternatingLine(columns, generateSymbol(row, "*- "));
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

function generateAlternatingRectangle(dimensions) {
  const rows = dimensions[1];
  const columns = dimensions[0];
  const pattern = [];
  for (let row = 1; row <= rows; row++) {
    const singleLine = generateAlternatingLine(columns, generateSymbol(row));
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

function generateSymbol(value ,symbol = "-*") {
  return symbol[value % symbol.length];
}

function generateAlternatingLine(length, char) {
  return generateLine(length, char, char, char);
}

function generateTrianglePattern(size) {
  const pattern = [];
  for (let row = 1; row <= size; row++) {
    const singleLine = generateLine(row);
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

function generateRightAngledTriangle(size) {
  const pattern = [];
  for (let row = 1; row <= size; row++) {
    const singleLine = generateLine(row).padStart(size);
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

function generateFilledRectangle(dimensions) {
  const rows = dimensions[1];
  const columns = dimensions[0];
  const pattern = [];
  for (let row = 1; row <= rows; row++) {
    const singleLine = generateLine(columns);
    pattern.push(singleLine);
  }
  return pattern.join("\n");
}

function generateHollowRectangle(dimensions) {
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

function isEven(value) {
  return value % 2 === 0;
}

function generateDiamond(dimensions) {
  if (isEven(dimensions[0])) {
    dimensions[0] = dimensions[0] - 1;
  }
  let pattern = '';
  for (let row = 1; row <= dimensions[0]; row++) {
    const patternOfLine = '';
    pattern += patternOfLine.padStart((dimensions[0] / 2) - 1, " ");
    pattern = "*".repeat(row);
  }
  console.log(pattern);
}

function printRows(dimensions) {
  let row = '';
  for (let column = 1; column <= dimensions[0]; column++) {
    row = row + `*`;
  }
  return row;
}

function rowSymbolForTwoCharacter(value) {
  const symbols = "-*";
  return symbols[value % 2];
}

function rowSymbolOfThreeCharacter(value) {
  const symbols = "*- ";
  return symbols[value % 3];
}

function areEmptyDimensions(dimensions) {
  return dimensions[0] === 0 || dimensions[1] === 0;
}

function composedMessage(style, dimensions, actual) {
  const inputMessage = `\t|Input : [[${style}], [${dimensions}]]`;
  const outputMessage = `\n\t|\n\t|Output : ${actual}\t\t`;
  return inputMessage + outputMessage;
}

function generateFailOrPass(isSame, fragmentMsg, expected, testDesc) {
  const expectation = "\n\t|Expected output : " + expected;
  const emojiForFailedCase = `----------\n❌ ${testDesc}\n`;
  const failedCase = emojiForFailedCase + fragmentMsg + expectation;

  if (isSame) {
    return messageForPassedCase(testDesc);
  }

  return failedCase;
}

function messageForPassedCase(testDesc) {
  return `✅ ${testDesc}`;
}

function testGeneratePattern(style, dimensions, expected, testDesc) {
  const actual = generatePattern(style, dimensions, 0);
  const fragmentMsg = composedMessage(style, dimensions, actual);
  const isSame = actual === expected;
  const message = generateFailOrPass(isSame, fragmentMsg, expected, testDesc);
  return message;
}

function testFilledRectangle() {
  console.log(testGeneratePattern('filled-rectangle', [5, 0], "", "Empty"));
  console.log(testGeneratePattern('filled-rectangle', [5, 3], `*****\n*****
*****`, "5 rows 3 columns"));
  console.log(testGeneratePattern('filled-rectangle', [2, 4], `**\n**\n**
**`, "2x4 rectangle"));
  console.log(testGeneratePattern('filled-rectangle', [1, 1], `*`, "1x1 rectangle"));
}

function testHollowRectangle() {
  console.log(testGeneratePattern('hollow-rectangle', [0, 4], ``, "Empty"));
  console.log(testGeneratePattern('hollow-rectangle', [4, 3], `****
*  *
****`, "5 rows 3 columns"));
  console.log(testGeneratePattern('hollow-rectangle', [5, 4], `*****
*   *
*   *
*****`, "5 rows 4 columns"));
}

function testAlternatingRectangle() {
  console.log(testGeneratePattern('alternating-rectangle', [3, 3], `***
---
***`, "3 rows 3 columns"));
  console.log(testGeneratePattern('alternating-rectangle', [5, 4], `*****
-----
*****
-----`, "5 rows 4 columns"));
}

function testSpaceAlternatingRectangle() {
  console.log(testGeneratePattern("spaced-alternating-rectangle", [3, 4], `***
---
   
***`, "3 rows 4 column"));
  console.log(testGeneratePattern("spaced-alternating-rectangle", [5, 6], `*****
-----
     
*****
-----
     `, "5 rows 6 columns"));
}

function testGenerateTrianglePattern() {
  console.log(testGeneratePattern("triangle", [0], "", "Empty check"));
  console.log(testGeneratePattern("triangle", [5], `*
**
***
****
*****`, "5 rows & columns"));
  console.log(testGeneratePattern("triangle", [3], `*
**
***`, "3 rows & columns"));
}

function testGenerateRightAngledTrianglePattern() {
  console.log(testGeneratePattern("right-aligned-triangle", [3], `  *
 **
***`, "3 rows and columns"));
  console.log(testGeneratePattern("right-aligned-triangle", [5], `    *
   **
  ***
 ****
*****`, "5 rows and columns"));
}

function main() {
  testFilledRectangle();
  testHollowRectangle();
  testAlternatingRectangle();
  testSpaceAlternatingRectangle();
  testGenerateTrianglePattern();
  testGenerateRightAngledTrianglePattern();
}

main();