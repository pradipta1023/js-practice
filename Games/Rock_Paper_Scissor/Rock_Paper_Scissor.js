const ROCK = 'rock 🪨';
const PAPER = 'paper 📑';
const SCISSOR = 'scissor ✂️';

// rock ? scissor : paper
// paper ? rock : scissor
// scissor ? paper : rock

const CHOICES = [0, 1, 2];
const MOVES = [ROCK, PAPER, SCISSOR];
const WINNING_MOVES = [SCISSOR, ROCK, PAPER];

function bgRed(text) {
  return "\x1B[41m" + text + "\x1B[0m";
}

function bgGreen(text) {
  return "\x1B[42m" + text + "\x1B[0m";
}

function bgYellow(text) {
  return "\x1B[43m" + text + "\x1B[0m";
}

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}

function dim(text) {
  return "\x1B[2m" + text + "\x1B[0m";
}

function getChoice() {
  const choiceInString = prompt(`Enter your choice : 
    1. ${ROCK}
    2. ${PAPER}
    3. ${SCISSOR}
    `);
  const choice = parseInt(choiceInString) - 1;
  
  return CHOICES.includes(choice) ? choice : getChoice();
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
} 

function isWon(userMove, computerMove) {
  return WINNING_MOVES[MOVES.indexOf(userMove)] === computerMove;
}

function isDraw(userMoves, computerMove) {
  return userMoves === computerMove;
}

function compareResult(userMove, computerMove) {
  const drawMessage = bgYellow("Match has drawn");
  return isDraw(userMove, computerMove) ? 
    drawMessage : 
    isWon(userMove, computerMove) ? 
      bgGreen(bold("You won 🏆")) : 
      bgRed(dim("You lost! 😞"));
}

function playAgain() {
  return confirm("Want to play again ?") ? play() : "";
}

function play() {
  const userChoice = getChoice();
  const comuterChoice = getComputerChoice();
  const actualUserChoice = MOVES[userChoice];
  const actualComputerChoice = MOVES[comuterChoice];
  console.log(`Your choice     : ${MOVES[userChoice]} 
Computer choice : ${MOVES[comuterChoice]}`);

  console.log(compareResult(actualUserChoice, actualComputerChoice));
  playAgain();
}

play();
