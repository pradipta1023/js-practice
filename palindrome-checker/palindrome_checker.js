const input = 0 + "";
let output = true;

let startOfString = 0;
let endOfString = input.length-1;

let leftDigit;
let rightDigit;
while(startOfString <= endOfString) {

    leftDigit = input[startOfString];
    rightDigit = input[endOfString];
    if(leftDigit !== rightDigit) {
        output = false;
    }
    startOfString = startOfString + 1;
    endOfString = endOfString - 1;
}

console.log("Input:",input,", Output:",output);

