const isString = (string) => typeof string === "string";

const split = (string, separator) => {
  if (!isString(string)) {
    return "Please give a string to split";
  }
  let isSeparator = 1;
  const splittedArray = [string[0]];
  let splitIndex = 0;
  for (let index = 1; index < string.length; index++) {
    if (string[index] === separator && isSeparator) {
      isSeparator = 0;
      splitIndex = splitIndex + 1;
    } else {
      isSeparator = 1;
      splittedArray[splitIndex] = (splittedArray[splitIndex] || "") +
        string[index];
    }
  }
  return splittedArray;
};

console.log(split(" abc def ghi jkl mno pqr  stu vwx yz", "  "));
