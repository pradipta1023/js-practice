const ROMANS = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const INTEGERS = [1, 5, 10, 50, 100, 500, 1000];

function romanToInteger(s) {
    let integerNumber = INTEGERS[ROMANS.indexOf(s[s.length - 1])];
    let prevDigit = s.length - 2;
    while (prevDigit >= 0) {
        if (ROMANS.indexOf(s[prevDigit]) < ROMANS.indexOf(s[prevDigit + 1])) {
            integerNumber -= INTEGERS[ROMANS.indexOf(s[prevDigit])];
        } else {
            integerNumber += INTEGERS[ROMANS.indexOf(s[prevDigit])];
        }
        prevDigit--;
    }
    return integerNumber; 
};

console.log(romanToInteger("XVII"));
console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("VX"));
