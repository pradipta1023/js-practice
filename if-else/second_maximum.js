let a = 54;
let b = 34;
let c = 93;
let secondMax;

if((a <= b && a >= c) || (a >= b && a <= c)){
    secondMax = a;
} else if((b <= a && b >= c) || (b <= c && b >= a)){
    secondMax = b;
} else {
    secondMax = c;
}
console.log(secondMax);
