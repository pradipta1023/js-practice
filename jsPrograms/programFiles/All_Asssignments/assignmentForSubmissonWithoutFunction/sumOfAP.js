let sumOfAp = 0;
let noOfTerms = n;
let currentTerm = a;

for (let termCount = 1; termCount <= noOfTerms; termCount++) {
  sumOfAp = sumOfAp + currentTerm;
  currentTerm = currentTerm +  d;
}

console.log(sumOfAp);