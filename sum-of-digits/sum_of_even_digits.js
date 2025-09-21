const inputToShow = 8372;

let inputToUse = inputToShow;
let output = 0;

let rightMostDigit = inputToUse % 10;
if(rightMostDigit % 2 === 0) {
    output = output + rightMostDigit;
}

inputToUse = (inputToUse - (rightMostDigit)) / 10;
rightMostDigit = inputToUse % 10;
if(rightMostDigit % 2 === 0) {
    output = output + rightMostDigit;
}

inputToUse = (inputToUse - (rightMostDigit)) / 10;
rightMostDigit = inputToUse % 10;
if(rightMostDigit % 2 === 0) {
    output = output + rightMostDigit;
}

inputToUse = (inputToUse - (rightMostDigit)) / 10;
rightMostDigit = inputToUse % 10;
if(rightMostDigit % 2 === 0) {

    output = output + rightMostDigit;
}
inputToUse = (inputToUse - (rightMostDigit)) / 10;

output = output === 0 ? "No even numbers found" : output;
console.log("Input:" ,inputToShow, "Output:",output);
