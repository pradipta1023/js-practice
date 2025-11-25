const rows = 5;
const cols = 3;
let pattern = '';
for (let row = 1; row <= rows; row = row + 2) {
  for (let col = 1; col <= rows - row - 1; col++) {
    pattern += row === 1 ? " ";
  }
  pattern = pattern + "*".repeat(row);
  pattern = pattern + "\n";
}

for (let row = rows; row > 1; row = row - 2) {
  for (let col = rows; col > row - 1; col--) {
    pattern += " ";
  }
  pattern = pattern + "*".repeat(row - 2);
  pattern = pattern + "\n";
}

console.log(pattern);