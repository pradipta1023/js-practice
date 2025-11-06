function diamondPalindrome(s) {
  let diamondPalindrome = s[0];
  let length = 1;
  let index = 1;
  while (length <= s.length * 2) {
    if (index === 0) {
      diamondPalindrome += "\n";
      diamondPalindrome += increaseOrder(s.slice(0, length + index), index);
      index = s.length - 1;
    } else {
      const slicedString = s.slice(0, length - index);
      diamondPalindrome += decreaseOrder(slicedString, slicedString.length - 1);
      index = 0;
    }
    length++;
  }
  return diamondPalindrome;
}

function increaseOrder(s, index) {
  if (index === s.length) {
    return "";
  }
  // console.log(s.at(index));
  return s.at(index) + increaseOrder(s, index + 1);
}

function decreaseOrder(s, index) {
  if (index === -1) {
    return "";
  }
  // console.log(s.at(index));
  return s.at(index - 1) + decreaseOrder(s, index - 1);
}

function main() {
  console.log(diamondPalindrome("abc"));
}

main();