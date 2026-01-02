// const screen = [];

// for (let index = 0; index < 30; index++) {
//   screen[index] = " ".repeat(127).split("");
// }

// const showScreen = (screen) => {
//   for (const i in screen) {
//     console.log(screen[i].join(""));
//   }
// };

// const drawOnScreen = (x, y, screen, charToPut) => {
//   screen[x % 30][y] = charToPut;
// };

// const drawStringOnScreen = (x, y, screen, stringToDraw, dy) => {
//   stringToDraw.split("").forEach((element) => {
//     drawOnScreen(x, y, screen, element);
//     y = (y + 1) % 127;
//     // x = (x + 1) % 127;
//   });
// };

// const clearScreen = (screen) => {
//   for (const i in screen) {
//     for (const j in screen[i]) {
//       screen[i][j] = " ";
//     }
//   }
// };

// let x = 0;
// let y = 0;

// const strings = [
//   { string: "ō͡≡o", y: 1, x: 0, dx: 4, dy: 0 },
//   { string: "ō͡≡o", y: 5, x: 0, dx: 9, dy: 0 },
//   { string: "ō͡≡o", y: 9, x: 0, dx: 8, dy: 0 },
//   { string: "ō͡≡o", y: 13, x: 0, dx: 6, dy: 0 },
// ];

// const abs = (x, dx) => {
//   x = (x + dx) % 127;
//   if (x <= 0) {
//     return 127 - x;
//   }
//   return x;
// };

// setInterval(() => {
//   console.clear();
//   clearScreen(screen);
//   strings.forEach((ele) => {
//     drawStringOnScreen(ele.x, ele.y, screen, ele.string);
//     if (ele.dy === 0) {
//       ele.x = abs(ele.x, ele.dx);
//     } else {
//       ele.y = abs(ele.y, ele.dy);
//     }
//   });
//   showScreen(screen);
// }, 400);

const screen = [];

for (let index = 0; index < 30; index++) {
  screen[index] = " ".repeat(126).split("");
}

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
    y = (y + 1) % 120;
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

strings.push({ string: "ō͡≡o", x: 1, y: 0, dx: 0, dy: 1.5 });
strings.push({ string: "ō͡≡o", x: 5, y: 0, dx: 0, dy: 2 });
strings.push({ string: "ō͡≡o", x: 9, y: 0, dx: 0, dy: 2 });
strings.push({ string: "ō͡≡o", x: 12, y: 0, dx: 0, dy: 2.5 });

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
    if (ele.dy === 0) {
      ele.x = abs(ele.x, ele.dx);
    } else {
      ele.y = abs(ele.y, ele.dy);
    }
  });
  showScreen(screen);
}, 100);
