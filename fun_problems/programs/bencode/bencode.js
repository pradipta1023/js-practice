function decryptNumber(encodedNumber) {
  const decodedNumber = encodedNumber.slice(1, encodedNumber.length - 1);
  return parseInt(decodedNumber);
}

function decodeNumber(encodedElements) {
  const endOfNumber = encodedElements.indexOf("e") + 1;
  const partToDecode = encodedElements.slice(0, endOfNumber);
  const decodedNumber = decryptNumber(partToDecode);
  const nextEncodedPart = encodedElements.slice(endOfNumber, encodedElements.length);

  return [decodedNumber, nextEncodedPart];
}

function decryptString(encodedString) {
  const colonPosition = encodedString.indexOf(":");
  return encodedString.slice(colonPosition + 1, encodedString.length);
}

function decodeString(encodedString) {
  const colonPosition = encodedString.indexOf(":");
  const lengthOfString = parseInt(encodedString.slice(0, colonPosition + 1));

  const nextPartStartIndex = colonPosition + lengthOfString + 1;
  const stringToEncode = encodedString.slice(0, nextPartStartIndex);
  const decodedString = decryptString(stringToEncode);

  const nextEncodedPart = encodedString.slice(nextPartStartIndex, encodedString.length);
  return [decodedString, nextEncodedPart];
}

function decryptArray(encodedArray, decoded) {
  switch (encodedArray.at(0)) {
    case "e":
      encodedArray = encodedArray.slice(1);
      return [decoded, encodedArray];
    case "i":
      const updatedNumberAndString = decodeNumber(encodedArray);
      decoded.push(updatedNumberAndString[0]);
      return decryptArray(updatedNumberAndString[1], decoded);
    case "l":
      const updatedArrayAndString = decryptArray(encodedArray.slice(1), []);
      decoded.push(updatedArrayAndString[0]);
      return decryptArray(updatedArrayAndString[1], decoded);
    default: 
      const updatedStrings = decodeString(encodedArray);
      decoded.push(updatedStrings[0]);
      return decryptArray(updatedStrings[1], decoded);
  }
}

function decode(elementToDecode) {
  if (elementToDecode.at(0) === "i") {
    return decryptNumber(elementToDecode);
  }
  if (elementToDecode.at(0) === "l") {
    return decryptArray(elementToDecode.slice(1), []).at(0);
  }
  return decryptString(elementToDecode);
}

function encodeNumber(number) {
  return `i${number}e`;
}

function encodeString(string) {
  return `${string.length}:${string}`;
}

function encode(elementToEncode) {
  if (typeof elementToEncode === "number") {
    return encodeNumber(elementToEncode);
  }
  if (typeof elementToEncode === "string") {
    return encodeString(elementToEncode);
  }
}

console.log(decode("li123ee"));
console.log(decode("li123eli0eei23eli786eei9ee"));
console.log(decode("li123eli0ee5:helloe"));
console.log(decode("l5:helloe"));
console.log(decode("i123456789e"));
console.log(decode("i0e"));
console.log(decode("5:Hello"));
console.log(decode("8:@#$%&*()"));
console.log(decode("0:"));

console.log(encodeNumber(123));
console.log(encodeNumber(0));
console.log(encodeString("Hello"));
console.log(encodeString("@#$%&*()"));
