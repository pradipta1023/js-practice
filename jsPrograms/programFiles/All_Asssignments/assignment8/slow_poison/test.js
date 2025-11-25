import * as patterns from "./code.js";

function generatePattern(style, dimensions) {
  if (areEmptyDimensions(dimensions)) {
    return "";
  }
  switch (style) {
    case "filled-rectangle":
      return patterns.generateFilledRectangle(dimensions);
    case "hollow-rectangle":
      return patterns.generateHollowRectangle(dimensions);
    case "alternating-rectangle":
      return patterns.generateAlternatingRectangle(dimensions);
    case "spaced-alternating-rectangle":
      return patterns.generateSpacedAlternatingRectangle(dimensions);
    case "triangle":
      return patterns.generateTrianglePattern(dimensions[0]);
    case "right-aligned-triangle":
      return patterns.generateRightAngledTriangle(dimensions);
  }
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
  console.log(testGeneratePattern("filled-rectangle", [5, 0], "", "Empty"));
  console.log(testGeneratePattern(
    "filled-rectangle",
    [5, 3],
    `*****\n*****
*****`,
    "5 rows 3 columns",
  ));
  console.log(testGeneratePattern(
    "filled-rectangle",
    [2, 4],
    `**\n**\n**
**`,
    "2x4 rectangle",
  ));
  console.log(
    testGeneratePattern("filled-rectangle", [1, 1], `*`, "1x1 rectangle"),
  );
}

function testHollowRectangle() {
  console.log(testGeneratePattern("hollow-rectangle", [0, 4], ``, "Empty"));
  console.log(testGeneratePattern(
    "hollow-rectangle",
    [4, 3],
    `****
*  *
****`,
    "5 rows 3 columns",
  ));
  console.log(testGeneratePattern(
    "hollow-rectangle",
    [5, 4],
    `*****
*   *
*   *
*****`,
    "5 rows 4 columns",
  ));
}

function testAlternatingRectangle() {
  console.log(testGeneratePattern(
    "alternating-rectangle",
    [3, 3],
    `***
---
***`,
    "3 rows 3 columns",
  ));
  console.log(testGeneratePattern(
    "alternating-rectangle",
    [5, 4],
    `*****
-----
*****
-----`,
    "5 rows 4 columns",
  ));
}

function testSpaceAlternatingRectangle() {
  console.log(testGeneratePattern(
    "spaced-alternating-rectangle",
    [3, 4],
    `***
---
   
***`,
    "3 rows 4 column",
  ));
  console.log(testGeneratePattern(
    "spaced-alternating-rectangle",
    [5, 6],
    `*****
-----
     
*****
-----
     `,
    "5 rows 6 columns",
  ));
}

function testGenerateTrianglePattern() {
  console.log(testGeneratePattern("triangle", [0], "", "Empty check"));
  console.log(testGeneratePattern(
    "triangle",
    [5],
    `*
**
***
****
*****`,
    "5 rows & columns",
  ));
  console.log(testGeneratePattern(
    "triangle",
    [3],
    `*
**
***`,
    "3 rows & columns",
  ));
}

function testGenerateRightAngledTrianglePattern() {
  console.log(testGeneratePattern(
    "right-aligned-triangle",
    [3],
    `  *
 **
***`,
    "3 rows and columns",
  ));
  console.log(testGeneratePattern(
    "right-aligned-triangle",
    [5],
    `    *
   **
  ***
 ****
*****`,
    "5 rows and columns",
  ));
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
