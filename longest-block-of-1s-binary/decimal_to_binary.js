const inputToShow = 13;
let output = 0;
let inputToUse = inputToShow;


output = output + (inputToUse % 2) * 10;
inputToUse = (inputToUse - (inputToUse % 2)) / 2;

output = output + (inputToUse % 2) * 100;
inputToUse = (inputToUse - (inputToUse % 2)) / 2;

output = output + (inputToUse % 2) * 1000;
inputToUse = (inputToUse - (inputToUse % 2)) / 2;

output = output + (inputToUse % 2) * 10000;
inputToUse = (inputToUse - (inputToUse % 2)) / 2;

output = output + (inputToUse % 2) * 10000;
inputToUse = (inputToUse - (inputToUse % 2)) / 2;

console.log("Input:" ,inputToShow, "Output:",output);
