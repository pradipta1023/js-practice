const inputToShow = 197655;
let noOfDigitsInInput = 0;

let inputToUse = inputToShow;
let remainder;
while(inputToUse !== 0) {
	remainder = inputToUse % 10;
	inputToUse = (inputToUse - remainder) / 10;
	noOfDigitsInInput = noOfDigitsInInput + 1;
}

console.log("Input:",inputToShow, "Output:",noOfDigitsInInput);
