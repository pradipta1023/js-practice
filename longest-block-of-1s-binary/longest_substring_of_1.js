const inputToShow = 29;

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
let output;
let binaryRemainder = binaryNumberToUse % 2;
if(binaryRemainder === 1) {
    countOfSimultaneous1s = countOfSimultaneous1s + 1;
} else {
    output = output > countOfSimultaneous1s ? output : countOfSimultaneous1s;
    countOfSimultaneous1s = 0;
}
binaryNumberToUse = (binaryNumberToUse - binaryRemainder) / 2;

binaryRemainder = binaryNumberToUse % 2;
if(binaryRemainder === 1) {
    countOfSimultaneous1s = countOfSimultaneous1s + 1;
} else {
    output = output > countOfSimultaneous1s ? output : countOfSimultaneous1s;
    countOfSimultaneous1s = 0;
}
binaryNumberToUse = (binaryNumberToUse - binaryRemainder) / 2;

binaryRemainder = binaryNumberToUse % 2;
if(binaryRemainder === 1) {
    countOfSimultaneous1s = countOfSimultaneous1s + 1;
} else {
    output = output > countOfSimultaneous1s ? output : countOfSimultaneous1s;
    countOfSimultaneous1s = 0;
}
binaryNumberToUse = (binaryNumberToUse - binaryRemainder) / 2;

binaryRemainder = binaryNumberToUse % 2;
if(binaryRemainder === 1) {
    countOfSimultaneous1s = countOfSimultaneous1s + 1;
} else {
    output = output > countOfSimultaneous1s ? output : countOfSimultaneous1s;
    countOfSimultaneous1s = 0;
}
binaryNumberToUse = (binaryNumberToUse - binaryRemainder) / 2;

binaryRemainder = binaryNumberToUse % 2;
if(binaryRemainder === 1) {
    countOfSimultaneous1s = countOfSimultaneous1s + 1;
} else {
    output = output > countOfSimultaneous1s ? output : countOfSimultaneous1s;
    countOfSimultaneous1s = 0;
}
binaryNumberToUse = (binaryNumberToUse - binaryRemainder) / 2;
output = countOfSimultaneous1s;
    
    
console.log("Input:" ,binaryNumber, "Output:",output);
