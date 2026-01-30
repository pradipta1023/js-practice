import { input, select } from "@inquirer/prompts";

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

const createCards = (inputFile) => {
  const cards = inputFile.split("\n").map((card) => card.split(","));
  return objectCards(cards);
};

const learn = async (cards) => {
  const cardsToLearn = cards.slice();
  let noOfTimesToPractice = cardsToLearn.length;

  let i = 0;
  while (noOfTimesToPractice) {
    const currentCard = cardsToLearn[i];
    const front = currentCard.front;
    const back = await input({
      message: `> ${front}\n${"-".repeat(front.length + 5)}\n>> `,
    });
    console.clear();
    if (back === currentCard.back) {
      console.log(` Previous ✅\n`);
      currentCard.timesToLearn--;
      if (currentCard.timesToLearn === 0) cardsToLearn.splice(i, 1);
    } else {
      console.log(` Previous ❌\n`);
      currentCard.timesToLearn++;
    }

    noOfTimesToPractice = cardsToLearn.reduce(
      (noOfTimes, card) => noOfTimes + card.timesToLearn,
      0,
    );

    i = (i + 1) % cardsToLearn.length;
  }
};

const practice = async (inputFile) => {
  const cards = createCards(inputFile);
  console.log(" Here you go! Practice");
  await learn(cards);
  console.log(" Cracked 🎯✅");
};

const getFile = async (filePath) => await Deno.readTextFile(filePath);

const makeAnki = async () => {
  const fileContent = [];
  while (fileContent.length < 3 || confirm()) {
    const front = await input({ message: " Enter the question(front): " });
    const back = await input({ message: " Enter the answer(back): " });
    fileContent.push(`${front},${back}`);
  }
  return fileContent;
};

const writeOnFile = async (fileName, fileContent) => {
  await Deno.writeTextFile(`${fileName}.txt`, fileContent.join("\n"));
  await Deno.writeTextFile("files.txt", `\n${fileName}.txt`, { append: true });
};

const makeCards = async () => {
  const fileName = await input({
    message: " Enter the name of the topic you wanna practice: ",
    required: true,
    validate: (fileName) =>
      fileName === "files" ? "Please choose a different name" : true,
  });
  console.log(
    `${"=".repeat(35)}\nAt least you have to give 3 cards\n${"=".repeat(35)}`,
  );
  const fileContent = await makeAnki();
  await writeOnFile(fileName, fileContent);
  console.log("Cards creaeted and saved successfully");
};

const makeChoices = async (path) => {
  const choices = [];
  const paths = (await Deno.readTextFile(`${path}`)).split("\n");
  for await (const path of paths) {
    const name = path.slice(0, path.length - 4);
    choices.push({ name, value: path });
  }
  choices.push({
    name: "back",
    value: -1,
  });
  return choices;
};

const anki = async () => {
  const choices = await makeChoices("files.txt");
  const filePath = await select({
    message: "Select a file",
    choices,
    pageSize: choices.length + 1,
  });
  if (filePath === -1) return;
  const inputFile = await getFile(filePath);
  await practice(inputFile);
  return;
};

const main = async () => {
  while (true) {
    const handler = await select({
      message: "Select your choice: ",
      choices: [
        { name: "Create", value: makeCards, description: "Create your cards" },
        { name: "Learn", value: anki, description: "Learn from existing one" },
        { name: "Exit", value: Deno.exit, description: "Exit from app" },
      ],
    });
    await handler();
  }
};

await main();
