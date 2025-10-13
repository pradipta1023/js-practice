const GROUND = [];
const DISPLAY_GROUND = [];
let noOfBombsDefused = 0;
const BOMBS = [];
const NO_OF_MINE = Math.floor(Math.random() * 10);

function createGround() {
  for (let index = 0; index < 50; index++) {
    GROUND.push(0);
    BOMBS.push("⬛️\t");
    DISPLAY_GROUND[index] = index + "\t";
  }

  console.log("You are in the ground now. Start defusing bombs.");
  return;
}

function generateRandomIndex() {
  const randomNumber = Math.floor(Math.random() * 50);
  return randomNumber;
}

function generateMine() {
  console.log(`Total bombs : ${NO_OF_MINE}`);
  for (let index = 0; index < NO_OF_MINE; index++) {
    const randomIndex = generateRandomIndex();
    GROUND[randomIndex] = 1;
    BOMBS[randomIndex] = "🟥\t";
  }
}

function showActualBombs() {
  const lengthOfGround = BOMBS.length;

  for (let index = 0; index < lengthOfGround; index = index + 5) {
    const groundString = BOMBS.slice(index, index + 5).join("");
    console.log(groundString);

  }
}

function showGround() {
  const lengthOfGround = DISPLAY_GROUND.length;

  for (let index = 0; index < lengthOfGround; index = index + 5) {
    const groundString = DISPLAY_GROUND.slice(index, index + 5).join("");
    console.log(groundString);

  }
}

function isBomb(index) {
  if (GROUND[index] === 1) {
    GROUND[index] = 0;
    DISPLAY_GROUND[index] = "🎯\t";
    BOMBS[index] = "🎯\t";
    noOfBombsDefused++;
    return "Successfully defused bomb";
  }

  DISPLAY_GROUND[index] = "⬛️\t";
  return "There is no bomb in this index";
}

function isInvalidChoice(choice) {
  return choice < 0 || choice > 49;
}

function play(timeRemaining) {
  if (timeRemaining < Date.now() || NO_OF_MINE === noOfBombsDefused) {
    console.log(`Total ${NO_OF_MINE} bombs are there
Out of them ${noOfBombsDefused} are defused`);
    return;
  }
  showGround();
  const userChoice = prompt("Enter the index to defuse bomb : ");
  if (isInvalidChoice(parseInt(userChoice))) {
    console.log("Invalid choice");
    return play(timeRemaining);
  }
  console.log(isBomb(userChoice));
  console.clear();
  return play(timeRemaining);
}

function explainRules() {
  console.log(`Enemies mined bombs just in front of the gate of your kingdom
You are the main soldier of your king.
King called you and said to defuse bombs so that he can enter in his kingdom safely
Now you have to go in that place to defuse those.`);
}

function main() {
  explainRules();
  prompt("Enter anything to start : ");
  createGround();
  generateMine();
  play(Date.now() + 20000);
  showActualBombs();
}

main();
