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


const testCaseToUse = testCase8;

// Write your code here:
let leastDistance = 101;
let currentIndex = 0;
let targetAnimal;
if(testCaseToUse[currentIndex] === lion) {
    targetAnimal = lion;
} else if(testCaseToUse[currentIndex] === zebra) {
    targetAnimal = zebra;
} else {
    targetAnimal = space;
}


let targetAnimalIndex = currentIndex;
currentIndex = currentIndex + 1;
let currentDistance;
if(targetAnimal === lion) {
    if(testCaseToUse[currentIndex] === zebra) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = zebra;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
} else {
    if(testCaseToUse[currentIndex] === lion) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = lion;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
}

if(targetAnimal === lion) {
    if(testCaseToUse[currentIndex] === zebra) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = zebra;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
} else {
    if(testCaseToUse[currentIndex] === lion) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = lion;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
}

if(targetAnimal === lion) {
    if(testCaseToUse[currentIndex] === zebra) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = zebra;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
} else {
    if(testCaseToUse[currentIndex] === lion) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = lion;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
}

if(targetAnimal === lion) {
    if(testCaseToUse[currentIndex] === zebra) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = zebra;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
} else {
    if(testCaseToUse[currentIndex] === lion) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = lion;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
}

if(targetAnimal === lion) {
    if(testCaseToUse[currentIndex] === zebra) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = zebra;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
} else {
    if(testCaseToUse[currentIndex] === lion) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = lion;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
}

if(targetAnimal === lion) {
    if(testCaseToUse[currentIndex] === zebra) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = zebra;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
} else {
    if(testCaseToUse[currentIndex] === lion) {
        currentDistance = currentIndex - targetAnimalIndex - 1;
        leastDistance = leastDistance > currentDistance ? currentDistance : leastDistance;
        targetAnimal = lion;
        targetAnimalIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
}

const output = leastDistance === 101 ? -1 : leastDistance;
console.log("Input: ", testCaseToUse, "Output:", output);

