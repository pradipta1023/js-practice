const zebra = "Z";
const lion = "L";
const space = " ";

const testCase1 = "LZ"; //Output: 0;
const testCase2 = "Z L"; //Output: 1; 
const testCase3 = "L     Z"; //Output: 5;
const testCase4 = "L     L"; //Output: -1;
const testCase5 = "L  ZL Z"; //Output: 0;
const testCase6 = "L ZZ L "; //Output: 1;
const testCase7 = "Z  Z  Z"; //Output: -1;
const testCase8 = " LZ"; //Output: 0;
const testCase9 = "   L Z    LZ"; //Output: 0;
const testCase10 = "L  L Z"; //Output: 1;
const testCase11 = "Z  Z L Z Z   ZL"; //Output: 0;
const testCase12 = "Z    Z   L Z LL ZZ  LZ"; //Output: 0;


const testCaseToUse = testCase10;

// Write your code here:
let leastDistance = 101;
let currentPosition = 0;
let firstCharacterPointer;

if(testCaseToUse[currentPosition] === lion) {
    firstCharacterPointer = lion;
} else if(testCaseToUse[currentPosition] === zebra) {
    firstCharacterPointer = zebra;
} else {
    firstCharacterPointer = space;
}

let targetAnimalPosition = currentPosition;
let currentDistance;
let currentCharacterPointer;

for(currentPosition = 1; currentPosition < testCaseToUse.length; currentPosition++){

    currentCharacterPointer = testCaseToUse[currentPosition];
    if(firstCharacterPointer === lion) {

        if(currentCharacterPointer === zebra) {

            currentDistance = currentPosition - targetAnimalPosition - 1;
            leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
            firstCharacterPointer = zebra;
            targetAnimalPosition = currentPosition;            
        } else if(currentCharacterPointer === lion) {

            targetAnimalPosition = currentPosition;
        }
    } else if(firstCharacterPointer === zebra){

        if(currentCharacterPointer === lion) {

            currentDistance = currentPosition - targetAnimalPosition - 1;
            leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
            firstCharacterPointer = lion;
            targetAnimalPosition = currentPosition;
        } else if(currentCharacterPointer === zebra) {

            targetAnimalPosition = currentPosition;
        }
    } else {

        firstCharacterPointer = currentCharacterPointer !== " " ? currentCharacterPointer === lion ? lion : zebra : space;
        targetAnimalPosition = currentPosition;
    }
}

const output = leastDistance === 101 ? -1 : leastDistance;
console.log("Input: ", testCaseToUse, "Output:", output);
