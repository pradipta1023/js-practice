const createScreen = (height, width) => {
  return {
    height,
    width,
    pixels: Array.from(
      { length: height },
      (_) => Array.from({ length: width }, (_) => " "),
    ),
  };
};

const showScreen = (screen) => {
  console.log(screen.pixles.map((row) => row.join("").join("\n")));
};

const main = () => {
  const screen = createScreen(30, 30);
  showScreen(screen);
};

main();
