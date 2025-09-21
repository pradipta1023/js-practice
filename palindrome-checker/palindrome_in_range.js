const startOfRange = 0;
const endOfRange = 300;

let targetInput;
let startOfString;
let endOfString;
let output;
let leftDigit;
let rightDigit;
for(let targetNumber = startOfRange; targetNumber <= endOfRange; targetNumber++) {
    
    startOfString = 0;
    targetInput = targetNumber + "";
    endOfString =targetInput.length - 1;
    output = true;
    while(startOfString <= endOfString) {
    
        leftDigit = targetInput[startOfString];
        rightDigit = targetInput[endOfString];
        if(leftDigit !== rightDigit) {
            output = false;
        }
        startOfString = startOfString + 1;
        endOfString = endOfString - 1;
    }
    
    if(output) {
        console.log(targetInput);
    }
}


