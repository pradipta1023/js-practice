function multiplicationTable(a, b) {
  return a * b;
}

let tableCandidate = 5;
for (let multiplier = 1; multiplier <= 10; multiplier++) {
  console.log(tableCandidate ,"*", multiplier, "",multiplicationTable(tableCandidate, multiplier));
}
