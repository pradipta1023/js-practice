const input = "b";
let output = false;

switch (input) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        output = true;
        break;

    default:
        break;
}

console.log("Input:" ,input, "output:",output);
