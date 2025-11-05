const inputToShow = 7;
let output = 0;
let inputToUse = inputToShow;


let currentBase = 1;
let remainder;
while(inputToUse !== 0) {
    
    remainder = inputToUse % 2;
    output = output + remainder * currentBase;
    inputToUse = (inputToUse - remainder) / 2;
    currentBase = currentBase * 10;
}
console.log("Input:" ,inputToShow, "Output:",output);
