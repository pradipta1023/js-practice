  function printReverseTriangle(length) {
    let starCount = length;
    let gapCount = 0;
    let pattern = "";
    for (let index = 0; index < length; index = index = index + 2) {
      pattern += " ".repeat(gapCount);
      pattern += "*".repeat(starCount);
      starCount = starCount - 2;
      gapCount++;
      pattern += "\n";
    }
    return pattern;
  }

  function generateTriangle(length) {
    let pattern = "";
    let gapCount = length - 2;
    for (let index = 5; index <= length * 2; index = index + 2) {
      pattern += " ".repeat(gapCount);
      pattern += "*".repeat(index);
      pattern += "  ".repeat(length * 2 - index - gapCount);
      pattern += "*".repeat(index) + "\n";
      gapCount--;
    }
    return pattern;
  }

  function main() {
    let pattern = generateTriangle(10);
    pattern += printReverseTriangle(40);
    console.log(pattern);
  }

  main();
