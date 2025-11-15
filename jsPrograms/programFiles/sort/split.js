function indexOfAfter(str, target, startingIndex) {
  for (let i = startingIndex + 1; i < str.length; i++) {
    if (str[i] === target) return i;
  }

  return -1;
}

function toIntToken(str, cursor) {
  const indexOfEnd = indexOfAfter(str, "e", cursor);
  return [
    str.slice(cursor + 1, indexOfEnd),
    indexOfEnd + 1
  ];
}

function toStringToken(str, cursor) {
  const endOfLen = indexOfAfter(str, ":", cursor);
  const len = parseInt(str.slice(cursor, endOfLen));
  const value = str.slice(endOfLen + 1, endOfLen + 1 + len);
  return [
    value,
    endOfLen + 1 + len
  ]
}

function toListToken(str, cursor) {
  cursor = cursor + 1;
  const tokens = [];
  while (cursor < str.length && str[cursor] !== "e") {
    const value = toToken(str, cursor);
    tokens.push(value[0]);
    cursor = value[1];
  }
  return [tokens, cursor + 1];
}

function toToken(str, cursor) {
  switch (str[cursor]) {
    case "l": return toListToken(str, cursor);
    case "i": return toIntToken(str, cursor);
    default: return toStringToken(str, cursor);
  }
}

const value = toToken("llei2ee", 0)[0];
console.log("*".repeat(100));
console.log(value);
console.log("*".repeat(100));
