const input = 12321 + "";
let output = true;

let startOfString = 0;
let endOfString = input.length-1;

if(input[startOfString] !== input[endOfString]) {
    output = false;
}

startOfString = startOfString + 1;
endOfString = endOfString - 1;

if(startOfString === endOfString) {
    console.log("Input:",input,", Output:",output);
}

if(input[startOfString] !== input[endOfString]) {
    output = false;
}

startOfString = startOfString + 1;
endOfString = endOfString - 1;

if(startOfString === endOfString) {
    console.log("Input:",input,", Output:",output);
}

