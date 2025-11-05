const inputToShow = 439;

let binaryNumber = 0;
let inputToUse = inputToShow;
let currentBase = 1;
let remainder;

while(inputToUse !== 0) {
    
    remainder = inputToUse % 2;
    binaryNumber = binaryNumber + remainder * currentBase;
    inputToUse = (inputToUse - remainder) / 2;
    currentBase = currentBase * 10;
}

let binaryNumberToUse = binaryNumber;
let countOfSimultaneous1s = 0;
let longestSubstringOf1s = -1;
let binaryRemainder;

while(binaryNumberToUse !== 0) {

    binaryRemainder = binaryNumberToUse % 2;
    if(binaryRemainder === 1) {
        countOfSimultaneous1s = countOfSimultaneous1s + 1;
    } else {
        countOfSimultaneous1s = 0;
    }
    longestSubstringOf1s = longestSubstringOf1s > countOfSimultaneous1s ? longestSubstringOf1s : countOfSimultaneous1s;   
    binaryNumberToUse = (binaryNumberToUse - binaryRemainder) / 10;
}

longestSubstringOf1s = longestSubstringOf1s === -1 ? "No 1s found at all" : longestSubstringOf1s;
console.log("Input:" ,inputToShow ,"Binary:",binaryNumber, "Output:",longestSubstringOf1s);
