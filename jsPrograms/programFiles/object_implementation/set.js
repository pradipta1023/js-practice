const validChoices = [1];

const uniqueItems = (setItems, currentItem) => {
  setItems.includes(currentItem) ? setItems : setItems.push(currentItem);
  return setItems;
};

const convert = (array) => {
  array.reduce(uniqueItems, []);
};

const play = () => {
  while (true) {
    switch (choice) {
      case 1:
        convert();
        break;
      default:
        break;
    }
  }
};

function main() {
  play();
}

main();
