const MEMORY = [
  "Tesla", "Mango", "Rose", "Paris", "Canada", "Pineapple", "Ferrari", "Tulip", "Rome", 
 "Italy", "Apple", "BMW", "Lily", "London", "Japan", "Peach", "Audi", "Sunflower", 
 "Berlin", "Australia", "India"
];

const USER_CHOSE_MEMORY = [];
const ITEMS = [];

function generateRandomIndex() {
  return Math.floor(Math.random() * MEMORY.length);
}

function generateTihngs() {
  const item = MEMORY[generateRandomIndex()];
  return ITEMS.includes(item) ? item : generateTihngs(); 
}

function userInput() {
  return prompt("Enter your item name : ");
}

function takeInput() {
  const userChoice = userInput();
  if (USER_CHOSE_MEMORY.includes(userChoice)) {
    console.log("Already entered");
    return takeInput();
  }
  return userChoice;
}

function play() {
  const choice = 
  ITEMS.push(generateTihngs());
  USER_CHOSE_MEMORY.push(takeInput());

}