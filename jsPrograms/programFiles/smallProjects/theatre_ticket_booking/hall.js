const createTheatre = (height = 10, width = 10) => {
  const heightArr = [];
  for (let i = 0; i < height; i++) {
    const widthArr = [];
    let j = 0;
    while (j < width) {
      widthArr.push("⬜️");
      j++;
    }

    widthArr[j + 1] = "  ";
    widthArr[j + 2] = "  ";
    widthArr[j + 3] = "🟥";
    heightArr.push(widthArr);
  }
  return heightArr;
};

const showScreen = (theatre) =>
  console.log(theatre.map((x) => x.join("")).join("\n"));

const main = () => {
  const theatre = createTheatre(20, 20);
  showScreen(theatre);
};

main();
