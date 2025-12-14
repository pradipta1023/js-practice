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
  for (const i in screen) {
    console.log(screen[i].join(""));
  }
};

const drawOnScreen = (x, y, screen, charToPut) => {
  screen[x][y] = charToPut;
};

const drawStringOnScreen = (x, y, screen, stringToDraw, dy) => {
  stringToDraw.split("").forEach((element) => {
    drawOnScreen(x, y, screen, element);
    y = (y + 1) % 30;
    // x = (x + 1) % 30;
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

const createTextObject = (text, x, y, dx, dy) => {
  return {
    string: text,
    x: x,
    y: y,
    dx: dx,
    dy: dy,
  };
};

const strings = [
  createTextObject("Hello", 0, 0, 0, 2),
  createTextObject("How", 2, 30, 0, -2),
  createTextObject("Are", 4, 0, 0, 2),
  createTextObject("You", 6, 30, 0, -2),
  createTextObject("Aniruddha", 8, 0, 0, 2),
  createTextObject("Shivang Singh", 10, 30, 0, -2),
  createTextObject("Sandip", 12, 0, 0, 2),
  createTextObject("Siddhu", 16, 30, 0, -2),
  createTextObject("Sagnik", 0, 22, 2, 0),
  createTextObject("Ayush", 0, 8, 2, 0),
];

const abs = (x, dx) => {
  x = (x + dx) % 30;
  if (x <= 0) {
    return 29 - x;
  }
  return x;
};

const animate = (screen) => {
  setInterval(() => {
    console.clear();
    clearScreen(screen);
    strings.forEach((ele) => {
      drawStringOnScreen(ele.x, ele.y, screen, ele.string);
      if (ele.dy === 0) {
        ele.x = abs(ele.x, ele.dx);
      } else {
        ele.y = abs(ele.y, ele.dy);
      }
    });
    showScreen(screen);
  }, 400);
};

const main = () => {
  const screen = createScreen(30, 30);
  animate(screen);
};

main();
