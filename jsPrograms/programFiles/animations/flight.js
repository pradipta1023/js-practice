const screen = [];

for (let index = 0; index < 121; index++) {
  screen[index] = " ".repeat(120).split("");
}

const showScreen = (screen) => {
  for (const i in screen) {
    console.log(screen[i].join(""));
  }
};

const drawOnScreen = (x, y, screen, charToPut) => {
  console.log(x, y, charToPut);

  screen[x][y] = charToPut;
};

const drawStringOnScreen = (x, y, screen, stringToDraw, dy) => {
  stringToDraw.split("").forEach((element) => {
    drawOnScreen(x, y, screen, element);
    y = (y + 1) % 120;
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

const strings = [
  { string: "🛫", x: 120, y: 0, dx: -2, dy: 5 },
];

const abs = (x, dx) => {
  x = (x + dx) % 120;
  if (x <= 0) {
    return 120 - x;
  }
  return x;
};

setInterval(() => {
  console.clear();
  clearScreen(screen);
  strings.forEach((ele) => {
    drawStringOnScreen(ele.x, ele.y, screen, ele.string);
    ele.x = abs(ele.x, ele.dx);
    ele.y = abs(ele.y, ele.dy);
  });
  showScreen(screen);
}, 200);
