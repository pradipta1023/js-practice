export const bgRed = (text) => {
  return "\x1B[41m" + text + "\x1B[0m";
};

export const bgGreen = (text) => {
  return "\x1B[42m" + text + "\x1B[0m";
};

export const bgYellow = (text) => {
  return "\x1B[43m" + text + "\x1B[0m";
};

export const bgBlue = (text) => {
  return "\x1B[44m" + text + "\x1B[0m";
};

export const bold = (text) => {
  return "\x1B[1m" + text + "\x1B[0m";
};

// const bgCyan = (text) => {
//   return "\x1B[46m" + text + "\x1B[0m";
// }
