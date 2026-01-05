const snakeToCamelCase = () => {
  const input = prompt("Enter any word: ").split("");
  for (let idx = 0; idx < input.length; idx++) {
    const element = input[idx];
    if (element === "_") {
      input.splice(idx, 1);
      input[idx] = input[idx++].toUpperCase();
    }
  }
  return input.join("");
};

snakeToCamelCase();
