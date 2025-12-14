const screen = [];

for (let index = 0; index < 30; index++) {
  screen[index] = " ".repeat(30).split("");
}

const showScreen = (screen) => {
  for (const i in screen) {
    console.log(screen[i].join(""));
  }
};

const drawOnScreen = (x, y, screen, charToPut) => {
  screen[x][y] = charToPut;
};

const drawStringOnScreen = (x, y, screen, stringToDraw) => {
  stringToDraw.split("").forEach((element) => {
    drawOnScreen(x, y, screen, element);
    y = (y + 1) % 30;
  });
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
  ["Hello", "How", "Are", "You"].forEach((ele, index) => {
    drawStringOnScreen(index, y, screen, ele);
    y = (y + 1) % 30;
  });
  showScreen(screen);
}, 300);
