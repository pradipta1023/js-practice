const input = "Australia";
let output = 0;

let targetAlphabet;
for(let currentPosition = 0; currentPosition < input.length; currentPosition++){
    
    targetAlphabet = input[currentPosition];
    switch (targetAlphabet) {
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
            output = output + 1;
            break;
    
        default:
            break;
    }

}

console.log("Input:" ,input, "Output:",output);
