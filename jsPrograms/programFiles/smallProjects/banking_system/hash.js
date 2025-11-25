const hash = {
  0: "$",
  1: "#",
  2: "~",
  3: "%",
  4: "@",
  5: "^",
  6: "&",
  7: "/",
  8: "*",
  9: "!",
  "$": 0,
  "#": 1,
  "~": 2,
  "%": 3,
  "@": 4,
  "^": 5,
  "&": 6,
  "/": 7,
  "*": 8,
  "!": 9,
};

const encrypt = {
  "$": 0,
  "#": 1,
  "~": 2,
  "%": 3,
  "@": 4,
  "^": 5,
  "&": 6,
  "/": 7,
  "*": 8,
  "!": 9,
  0: "$",
  1: "#",
  2: "~",
  3: "%",
  4: "@",
  5: "^",
  6: "&",
  7: "/",
  8: "*",
  9: "!",
};

export const hasher = (password) => {
  let hashedPassword = "";

  for (const char of password) {
    hashedPassword += hash[char] || char;
  }

  return hashedPassword;
};

export const encrypter = (password) => {
  let encryptedPassword = "";

  for (const char of password) {
    encryptedPassword += encrypt[char] || char;
  }

  return encryptedPassword;
};
