const screen = [
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
  " ".repeat(20).split(""),
];

const showScreen = (screen) => {
  for (const i in screen) {
    console.log(screen[i].join(""));
  }
};

const drawOnScreen = (x, y, screen, charToDraw) => {
  screen[x][y] = charToDraw;
};

const clearScreen = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = " ";
    }
  }
};

let x = 0;
let y = 0;

setInterval(() => {
  console.clear();
  clearScreen(screen);
  // x = (x + 1) % 20;
  y = (y + 1) % 20;
  drawOnScreen(x, y, screen, "X");
  showScreen(screen);
}, 300);
