// const startOfRange = 10;
// let eachTerm = startOfRange % 2 === 0 ? startOfRange : startOfRange + 1;
// console.log(startOfRange,"is an even number");

// eachTerm = eachTerm + 2;
// console.log(eachTerm,"is an even number");

// eachTerm = eachTerm + 2;
// console.log(eachTerm,"is an even number");

// eachTerm = eachTerm + 2;
// console.log(eachTerm,"is an even number");

// eachTerm = eachTerm + 2;
// console.log(eachTerm,"is an even number");

// eachTerm = eachTerm + 2;
// console.log(eachTerm,"is an even number");

// eachTerm = eachTerm + 2;
// console.log(eachTerm,"is an even number");

// eachTerm = eachTerm + 2;
// console.log(eachTerm,"is an even number");

// eachTerm = eachTerm + 2;
// console.log(eachTerm,"is an even number");

// eachTerm = eachTerm + 2;
// console.log(eachTerm,"is an even number");


const startOfRange = 36;
let eachTerm = startOfRange % 2 === 0 ? startOfRange : startOfRange + 1;
const requiredRange = 10;
console.log("For your given range:",requiredRange,"The output will be:");
for(let noOfEvens = 0; noOfEvens <= requiredRange; noOfEvens++) {
    console.log(eachTerm);
    eachTerm = eachTerm + 2;
}
