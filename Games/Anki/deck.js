const createCards = (inputFile) => {
  const cards = inputFile.split("\n").map((card) => card.split(","));
  return objectCards(cards);
};

const objectCards = (listOfCards) => {
  const cards = [];
  for (const frontAndBack of listOfCards) {
    const card = {
      front: frontAndBack[0],
      back: frontAndBack[1],
      timesToLearn: 1,
    };
    cards.push(card);
  }
  return cards;
};

const learn = (cards) => {
  const cardsToLearn = cards.slice();
  let noOfTimesToPractice = cardsToLearn.length;

  let i = 0;
  while (noOfTimesToPractice) {
    const currentCard = cardsToLearn[i];
    const back = prompt(` ${currentCard.front}`);
    console.clear();
    if (back === currentCard.back) {
      console.log(` Previous ✅`);
      currentCard.timesToLearn--;
      if (currentCard.timesToLearn === 0) cardsToLearn.splice(i, 1);
    } else {
      console.log(` Previous ❌`);
      currentCard.timesToLearn++;
    }

    noOfTimesToPractice = cardsToLearn.reduce(
      (noOfTimes, card) => noOfTimes + card.timesToLearn,
      0,
    );

    i = (i + 1) % cardsToLearn.length;
  }
};

const practice = (inputFile) => {
  const cards = createCards(inputFile);
  console.log(" Here you go! Practice");
  learn(cards);
  console.log(" Cracked 🎯✅");
};

const getFilePath = () => prompt(" Enter the file path you want to practice:");

const getFile = (filePath) => {
  let inputFile;
  try {
    inputFile = Deno.readTextFileSync(filePath);
  } catch (error) {
    console.log("\n Cannot open the file provided by you!", error.name);
    const inputFilePath =
      confirm(" y: To open default file, n: to give path again")
        ? "default.txt"
        : getFilePath();
    inputFile = getFile(inputFilePath);
  }
  return inputFile;
};

const makeCards = () => {
  const fileName = prompt(" Enter the name of the topic you wanna practice: ");
  console.log(" At least you have to give 3 cards");
  const fileContent = [];
  let cardNo = 0;
  while (cardNo < 3 || confirm()) {
    const front = prompt(" Enter the question(front): ");
    const back = prompt(" Enter the answer(back): ");
    fileContent.push(`${front},${back}`);
    cardNo++;
  }
  const content = fileContent.join("\n");
  console.log(content);
  Deno.writeTextFileSync(`${fileName}.txt`, content);
};

const main = () => {
  while (true) {
    const input = prompt(" 1. Create\n 2. Learn\n Enter your choice: ");
    if (input === "1") {
      makeCards();
      console.log("Cards creaeted and saved successfully");
      console.log("You can access it by names");
    } else {
      const filePath = getFilePath();
      const inputFile = getFile(filePath);
      practice(inputFile);
    }
  }
};

main();
