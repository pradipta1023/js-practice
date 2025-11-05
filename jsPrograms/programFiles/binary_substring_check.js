// Binary to decimal
let decimal = 19;
const decimalToShow = decimal;
let remainder;
let binaryDigit;
let multiplier = 1;
let binaryBase = 2;
let binaryOfGivenDecimal = 0;

while (decimal !== 0) {
    remainder = decimal % binaryBase;
    binaryDigit = multiplier * remainder;
    binaryOfGivenDecimal = binaryOfGivenDecimal + binaryDigit;
    multiplier = multiplier * 10;
    decimal = (decimal - remainder) / binaryBase;
}
console.log("Binary of",decimalToShow,"is",binaryOfGivenDecimal);




const ShowOfBinaryOfGivenDecimal = binaryOfGivenDecimal; 
const subString = 1;
let numberOfDigitsInSubString = 0;
let copyOfSubString = subString;
while(copyOfSubString !== 0){
    numberOfDigitsInSubString = numberOfDigitsInSubString + 1;
    copyOfSubString = (copyOfSubString - (copyOfSubString % 10)) / 10;
}

let numberOfDigitsInBinary = 0;
let copyOfBinaryOfGivenDecimal = binaryOfGivenDecimal;
while(copyOfBinaryOfGivenDecimal !== 0){
    numberOfDigitsInBinary = numberOfDigitsInBinary + 1;
    copyOfBinaryOfGivenDecimal = (copyOfBinaryOfGivenDecimal - (copyOfBinaryOfGivenDecimal % 10)) / 10;
}

let powerOfTen = 1;
for(let calculatePoweOfTen = 1; calculatePoweOfTen <= numberOfDigitsInSubString; calculatePoweOfTen++) {
    powerOfTen = powerOfTen * 10;
}
let numberOfOccurrance = 0;
let subStringFromBinary;
let isSame = false;

for(let end = numberOfDigitsInBinary; end >= 0+numberOfDigitsInSubString; end--) {
    subStringFromBinary = binaryOfGivenDecimal % powerOfTen;
    isSame = subStringFromBinary === subString;
    if(isSame) {
        numberOfOccurrance = numberOfOccurrance + 1;
        isSame = false;
    }
    binaryOfGivenDecimal = (binaryOfGivenDecimal -(binaryOfGivenDecimal % 10)) / 10;
}
console.log("Binary:",ShowOfBinaryOfGivenDecimal,"substring:",subString,"answer:",numberOfOccurrance);
