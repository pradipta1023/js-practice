const screen = [];

for (let index = 0; index < 30; index++) {
  screen[index] = " ".repeat(58).split("");
}

const showScreen = (screen) => {
  for (const i in screen) {
    console.log(screen[i].join(""));
  }
};

const targets = (screen) => {
  for (let index = 1; index <= screen.length; index++) {
    if (index % 4 === 1) {
      screen[index][56] = "👤";
    }
  }
};

const drawOnScreen = (x, y, screen, charToPut) => {
  screen[x][y] = charToPut;
};

const drawStringOnScreen = (x, y, screen, stringToDraw, dy) => {
  stringToDraw.split("").forEach((element) => {
    drawOnScreen(x, y, screen, element);
    y = (y + 1) % 58;
    // x = (x + 1) % 58;
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

const strings = [];

for (let index = 1; index <= 8 * 4; index += 4) {
  strings.push({ string: "▄︻デ══━一", x: index, y: 0, dx: 0, dy: 0 });
  strings.push({ string: "💥", x: index, y: 6, dx: 0, dy: 2 });
}

const abs = (x, dx) => {
  x = (x + dx) % 58;
  if (x <= 0) {
    return 64 - x;
  }
  return x;
};

setInterval(() => {
  console.clear();
  clearScreen(screen);
  targets(screen);
  strings.forEach((ele) => {
    drawStringOnScreen(ele.x, ele.y, screen, ele.string);
    if (ele.dy === 0) {
      ele.x = abs(ele.x, ele.dx);
    } else {
      ele.y = abs(ele.y, ele.dy);
    }
  });
  showScreen(screen);
}, 100);
