const SYMBOLS = ["🍋", "🥐", "🏅", "🐒"];
const WIN = bgGreen("You win 300 rs!")
const LOSS = bgRed("Better luck next time")
const WIN_LOSS = [WIN, LOSS];
const ADD_OR_DEDUCT_AMOUNT = [300, -20];

function bgRed(text) {
  return "\x1B[41m" + text + "\x1B[0m";
}

function bgGreen(text) {
  return "\x1B[42m" + text + "\x1B[0m";
}

function generateRandomIndex() {
  return Math.floor(Math.random() * 4);
}

function isJackpot(items) {
  console.log(items);
  return items[0] === items[1] && items[1] === items[2] ? 0 : 1;
}

function spin() {
  const spinnedItems = [];

  for (let currentItem = 0; currentItem < 3; currentItem++) {
    const randomIndex = generateRandomIndex();
    spinnedItems.push(SYMBOLS[randomIndex]);
  }

  return spinnedItems;
}

function addMoney() {
  const amount = prompt("Enter amount of money you want to add");
  return playGame(parseInt(amount));
}

function showDetails(isWin, totalAmount) {
  console.log(WIN_LOSS[isWin]);
  console.log(totalAmount);
}

function playGame(totalAmount, nameOfUser) {
  const spinItems = spin();
  const isWin = isJackpot(spinItems);
  totalAmount += ADD_OR_DEDUCT_AMOUNT[isWin];
  const playAgainMessage = `${nameOfUser} once more! Luck will be with you`;
  
  if (totalAmount === 0) {
    console.log("Insufficient amount\nPlease add money");
    return confirm("Want to add money") ? addMoney() : "";
  }
  showDetails(isWin, totalAmount);
  return confirm(playAgainMessage) ? playGame(totalAmount, nameOfUser) : totalAmount;
}

function start() {
  const name = prompt("Please enter your name : ");
  console.log("An amount of 100 rupees has been added to your account");
  return playGame(100, name);
}

function main() {
  console.log(`Rupeesc${start()} has been sent to your account`);
}

main();
