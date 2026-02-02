import { select } from "@inquirer/prompts";

import { bgBlue, bgGreen, bgRed, bgYellow, bold } from "../textColors.js";

const DRAW_MATCH = bgYellow("Match has drawn");
const WIN_MATCH = bgGreen("You've won the match");
const LOST_MATCH = bgRed("Better luck next time");
const VALID_SCORE = [0, 1, 2, 3, 4, 6, "0", "1", "2", "3", "4", "5", "6"];
const CHOICE = [0, 1];
const TOSS = ["Heads", "Tails"];
const BAT_OR_BALL = ["Bat", "Ball"];

const getComputerChoiceInABall = () => {
  const score = Math.floor(Math.random() * 7);
  return VALID_SCORE.includes(score) ? score : getComputerChoiceInABall();
};

const getUserChoice = () => {
  const choice = prompt(`Enter your choice : `);
  if (choice.includes("x")) {
    return getUserChoice();
  }
  return VALID_SCORE.includes(choice) ? parseInt(choice) : getUserChoice();
};

const decideWinner = (player1Score, player2Score) => {
  console.log(`
${"-".repeat(25)}
|User score     : ${player1Score}\t|
|Computer Score : ${player2Score}\t|
${"-".repeat(25)}`);

  const winnerDecider = [DRAW_MATCH, WIN_MATCH, LOST_MATCH];
  const scoreDifference = player1Score - player2Score;
  const winnerIndex = scoreDifference < 0 ? 2 : scoreDifference > 0 ? 1 : 0;

  return winnerDecider[winnerIndex];
};

const isOut = (choices, isBatting, batter) => {
  const isInValidUserChoice = !VALID_SCORE.includes(choices[batter]) &&
    isBatting;
  return choices[0] === choices[1] || isInValidUserChoice;
};

const isChased = (target, currentScore) => {
  return target < currentScore;
};

const selectBatter = (choices, isUser) => {
  return isUser % choices.length;
};

const outMessage = (choices) => {
  console.log(`${bgRed("Out! \\|/")}\nComputers choice : ${choices[0]}\n`);
};

const chasedMessage = () => {
  console.log("\n" + bgGreen("Chased! 💥💥"));
};

const runMessage = () => {
  console.log("🏏");
};

const choiceForCurrentBall = () => {
  return [getComputerChoiceInABall(), getUserChoice()];
};

const calculateScore = (
  isUser,
  userBatting,
  target = 37,
  score = 0,
  noOfBallsLeft = 6,
) => {
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
};

const getTossResult = () => {
  return Math.floor(Math.random() * 2);
};

const choiceByUser = () => {
  const choiceOfBatOrBall = +prompt(`What do you want to choose
  1. Bat
  2. Ball`) - 1;

  console.log(`\nUser chose to ${BAT_OR_BALL[choiceOfBatOrBall]} first\n`);

  const userChoiceOfPlay = [choiceOfBatOrBall, "U"];
  return CHOICE.includes(choiceOfBatOrBall) ? userChoiceOfPlay : choiceByUser();
};

const choiceByComputer = () => {
  const choiceOfBatOrBall = Math.floor(Math.random() * 2);
  console.log(`Computer chose to ${BAT_OR_BALL[choiceOfBatOrBall]} first\n`);

  return [choiceOfBatOrBall, "C"];
};

const userBatFirst = () => {
  console.log(`${bold("<--------User is batting--------->")}\n`);

  const userScore = calculateScore(1, true);
  console.log(`\nTarget for computer is : ${userScore}  
  It's your turn to ball\n`);

  console.log(`${bold("<--------Computer is batting--------->")}\n`);
  const computerScore = calculateScore(0, false, userScore);

  return decideWinner(userScore, computerScore);
};

const userBallFirst = () => {
  console.log(`${bold("<--------Computer is batting--------->")}\n`);

  const computerScore = calculateScore(0, false);
  console.log(`\nTarget for user is : ${computerScore}
    It's your turn to bat\n`);

  console.log(`${bold("<--------User is batting--------->")}\n`);

  const userScore = calculateScore(1, true, computerScore);

  return decideWinner(userScore, computerScore);
};

const playToss = async () => {
  const choiceOfToss = await select(
    {
      message: "Select a choice: ",
      choices: [
        {
          name: "heads",
          value: 0,
        },
        {
          name: "tails",
          value: 1,
        },
      ],
    },
  );

  const tossResult = +getTossResult();
  console.log(
    `\n${TOSS[choiceOfToss]} is the call & ${TOSS[tossResult]} it is!\n`,
  );

  return choiceOfToss === tossResult ? choiceByUser() : choiceByComputer();
};

const playMatch = async () => {
  const resultOfToss = await playToss();
  console.log(`\t\t\t\t\t\t\t${bgBlue(bold("TW CRICKET LEAGUE"))}`);
  console.log("\t\t<", "==".repeat(45), ">\n");

  if (resultOfToss[1] === "U") {
    return resultOfToss[0] === 0 ? userBatFirst() : userBallFirst();
  }

  return resultOfToss[0] === 0 ? userBallFirst() : userBatFirst();
};

const explainRules = () => {
  console.log(
    `${"*".repeat(50)}\n                   R U L E S \n${"*".repeat(50)}
  1. Choice should be in between 0 to 4 & 6
  2. 5 will be considered as out while batting
${"-".repeat(50)}
  ${bgBlue("Good Luck 🤞")}\n`,
  );
};

export const play = async () => {
  explainRules();
  console.log(await playMatch());

  return confirm("\nWanna play again!") ? play() : "";
};
