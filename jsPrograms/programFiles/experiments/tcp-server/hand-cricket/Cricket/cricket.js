const DRAW_MATCH = bgYellow("Match has drawn");
const WIN_MATCH = bgGreen("You've won the match");
const LOST_MATCH = bgRed("Better luck next time");
const VALID_SCORE = [0, 1, 2, 3, 4, 6, "0", "1", "2", "3", "4", "5", "6"];
const CHOICE = [0, 1];
const TOSS = ["Heads", "Tails"];
const BAT_OR_BALL = ["Bat", "Ball"];

function bgRed(text) {
  return "\x1B[41m" + text + "\x1B[0m";
}

function bgGreen(text) {
  return "\x1B[42m" + text + "\x1B[0m";
}

function bgYellow(text) {
  return "\x1B[43m" + text + "\x1B[0m";
}

function bgBlue(text) {
  return "\x1B[44m" + text + "\x1B[0m";
}

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}

// function bgCyan(text) {
//   return "\x1B[46m" + text + "\x1B[0m";
// }

function getComputerChoiceInABall() {
  const score = Math.floor(Math.random() * 7);
  return VALID_SCORE.includes(score) ? score : getComputerChoiceInABall();
}

function getUserChoice() {
  const choice = prompt(`Enter your choice : `);
  if (choice.includes("x")) {
    return getUserChoice();
  }
  return VALID_SCORE.includes(choice) ? parseInt(choice) : getUserChoice();
}

function decideWinner(player1Score, player2Score) {
  console.log(`
${"-".repeat(25)}
|User score     : ${player1Score}\t|
|Computer Score : ${player2Score}\t|
${"-".repeat(25)}`);

  const winnerDecider = [DRAW_MATCH, WIN_MATCH, LOST_MATCH];
  const scoreDifference = player1Score - player2Score;
  const winnerIndex = scoreDifference < 0 ? 2 : scoreDifference > 0 ? 1 : 0;

  return winnerDecider[winnerIndex];
}

function isOut(choices, isBatting, batter) {
  const isInValidUserChoice = !VALID_SCORE.includes(choices[batter]) &&
    isBatting;
  return choices[0] === choices[1] || isInValidUserChoice;
}

function isChased(target, currentScore) {
  return target < currentScore;
}

function selectBatter(choices, isUser) {
  return isUser % choices.length;
}

function outMessage(choices) {
  console.log(`${bgRed("Out! \\|/")}\nComputers choice : ${choices[0]}\n`);
}

function chasedMessage() {
  console.log("\n" + bgGreen("Chased! 💥💥"));
}

function runMessage() {
  console.log("🏏");
}

function choiceForCurrentBall() {
  return [getComputerChoiceInABall(), getUserChoice()];
}

function calculateScore(
  isUser,
  userBatting,
  target = 37,
  score = 0,
  noOfBallsLeft = 6,
) {
  if (noOfBallsLeft === 0) {
    return score;
  }

  const choices = choiceForCurrentBall();
  const batter = selectBatter(choices, isUser); //0: computer choice, 1: user choice

  if (isOut(choices, userBatting, batter)) {
    outMessage(choices);
    return calculateScore(isUser, userBatting, target, score, 0);
  }

  const latestScore = score + choices[batter];
  if (isChased(target, latestScore)) {
    chasedMessage();
    return calculateScore(isUser, userBatting, target, latestScore, 0);
  }

  runMessage();
  return calculateScore(
    isUser,
    userBatting,
    target,
    latestScore,
    noOfBallsLeft - 1,
  );
}

function getTossResult() {
  return Math.floor(Math.random() * 2);
}

function choiceByUser() {
  const choiceOfBatOrBall = +prompt(`What do you want to choose
  1. Bat
  2. Ball`) - 1;

  console.log(`\nUser chose to ${BAT_OR_BALL[choiceOfBatOrBall]} first\n`);

  const userChoiceOfPlay = [choiceOfBatOrBall, "U"];
  return CHOICE.includes(choiceOfBatOrBall) ? userChoiceOfPlay : choiceByUser();
}

function choiceByComputer() {
  const choiceOfBatOrBall = Math.floor(Math.random() * 2);
  console.log(`Computer chose to ${BAT_OR_BALL[choiceOfBatOrBall]} first\n`);

  return [choiceOfBatOrBall, "C"];
}

function userBatFirst() {
  console.log(`${bold("<--------User is batting--------->")}\n`);

  const userScore = calculateScore(1, true);
  console.log(`\nTarget for computer is : ${userScore}  
  It's your turn to ball\n`);

  console.log(`${bold("<--------Computer is batting--------->")}\n`);
  const computerScore = calculateScore(0, false, userScore);

  return decideWinner(userScore, computerScore);
}

function userBallFirst() {
  console.log(`${bold("<--------Computer is batting--------->")}\n`);

  const computerScore = calculateScore(0, false);
  console.log(`\nTarget for user is : ${computerScore}
    It's your turn to bat\n`);

  console.log(`${bold("<--------User is batting--------->")}\n`);

  const userScore = calculateScore(1, true, computerScore);

  return decideWinner(userScore, computerScore);
}

function playToss() {
  const choiceOfToss = +prompt(`Take a call for toss : 
  1. Heads
  2. Tails`) - 1;

  if (!CHOICE.includes(choiceOfToss)) {
    console.log("Invalid choice");
    return playToss();
  }

  const tossResult = +getTossResult();
  console.log(
    `\n${TOSS[choiceOfToss]} is the call & ${TOSS[tossResult]} it is!\n`,
  );

  return choiceOfToss === tossResult ? choiceByUser() : choiceByComputer();
}

function playMatch() {
  const resultOfToss = playToss();
  console.log(`\t\t\t\t\t\t\t${bgBlue(bold("TW CRICKET LEAGUE"))}`);
  console.log("\t\t<", "==".repeat(45), ">\n");

  if (resultOfToss[1] === "U") {
    return resultOfToss[0] === 0 ? userBatFirst() : userBallFirst();
  }

  return resultOfToss[0] === 0 ? userBallFirst() : userBatFirst();
}

function explainRules() {
  console.log(`RULES: 
  Choice should be in between 0 to 4 & 6
  5 will be considered as out while batting
  ${bgGreen("Good Luck 🤞")}\n`);
}

function play() {
  explainRules();
  console.log(playMatch());

  return confirm("\nWanna play again!") ? play() : "";
}

function main() {
  play();
}

main();
