const ITEMS = [];
const validChoice = [1, 2, 3, 4, 5, 6];

const choose = () => {
  const choiceOfUser = parseInt(
    prompt(
      "1. Add\n2. Access\n3. Show\n4. Delete\n5. Delete with key\n6. Exit",
    ),
  );

  if (validChoice.includes(choiceOfUser)) {
    return choiceOfUser;
  }

  return choose();
};

const addToObject = (key, value) => {
  const occurence = ITEMS.find((occurence) => occurence[0] === key);

  occurence ? occurence.push(value) : ITEMS.push([key, ":", value]);
};

const accessFromObject = (key) => {
  const list = ITEMS.find((object) => object[0] === key);

  return list ? list.slice(2) : "Key not found";
};

const addElement = () => {
  const key = prompt("Enter key: ");
  const data = prompt("Enter value: ");
  addToObject(key, data);
};

const accessElement = () => {
  const key = prompt("Enter key to access: ");
  return accessFromObject(key);
};

const takePromptToDelete = () => {
  const key = prompt("Please enter key: ");
  const value = prompt("Please enter value: ");
  return [key, value];
};

const deleteKey = (key) => {
  const currentIndex = ITEMS.indexOf(key);
  return ITEMS.splice(currentIndex, 1);
};

const deleteValue = (key, value) => {
  const indexOfValue = key.slice(2).indexOf(value) + 2;
  return indexOfValue >= 2
    ? `Deleted value: ${key.splice(indexOfValue, 1).at(0)}`
    : "Value not found";
};

const deleteElementFromObject = () => {
  const promptToDelete = takePromptToDelete();
  const key = promptToDelete.at(0);
  const value = promptToDelete.at(1);
  const list = ITEMS.find((object) => object[0] === key);

  if (!list) {
    return "Key not found";
  }

  const returnValue = deleteValue(list, value);

  if (list.length <= 2) {
    deleteKey(list);
  }

  return returnValue;
};

const deleteWithKey = () => {
  const key = prompt("Enter the key: ");
  const list = ITEMS.find((object) => object[0] === key);
  return list ? `Deleted : ${deleteKey(list).at(0).slice(2)}` : "Key not found";
};

const showObject = () => {
  console.log(ITEMS);
};

const play = () => {
  while (true) {
    const choice = choose();
    switch (choice) {
      case 1:
        addElement();
        break;
      case 2:
        console.log(accessElement());
        break;
      case 3:
        showObject();
        break;
      case 4:
        console.log(deleteElementFromObject());
        break;
      case 5:
        console.log(deleteWithKey());
        break;
      case 6:
        console.log("Exiting...");
        return;
      default:
        return;
    }
  }
};

function main() {
  play();
}

main();
