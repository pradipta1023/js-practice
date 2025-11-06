function butterflyPattern(length) {
  for (let index = 1; index <= length; index++) {
    const leftWing = "*".repeat(index);
    const spaces = "  ".repeat(length - index);
    const rightWing = "*".repeat(index);
    console.log(leftWing + spaces + rightWing);
  }

  for (let index = 1; index <= length; index++) {
    const leftWing = "*".repeat(length - index);
    const spaces = "  ".repeat(index);
    const rightWing = "*".repeat(length - index);
    console.log(leftWing + spaces + rightWing);
  }
}

butterflyPattern(10);
