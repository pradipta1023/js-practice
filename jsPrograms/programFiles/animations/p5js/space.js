const stars = [];
const createAsteroids = () =>{
  for(let i = 0; i<= 15; i++) {
    const rIndex = Math.round(random(0, 1000));
    const [x, y] = [random(1, 550), random(1, 10)];
    const [dy, dx] = [random(-5, 5) || 2, random(-5, 5) || 2];
    const color = random(["orange", "yellow", "blue"]);
    stars[rIndex] = new Star(x, y, dx, dy, 10, 0, color); 
  }
}

const randomStars = () => {
  const randomAccForLargeAndMed = random(0.0004, 0.0005);
  const randomAccForSmall = random(0.0001, 0.0002);
  const smallRandom = [0.2, 2, randomAccForSmall];
  const randoms = [];
  for(let i=0; i<=5; i++) {
    randoms.push(smallRandom);
  }
  randoms.push([0.4, 3, randomAccForLargeAndMed]);
  randoms.push([0.6, 4, randomAccForLargeAndMed]);

  return random(randoms);
}

const createStars = () => {
  let i = 1;
  while (i <= 1500) {
    const x = i * random(-10,10) % 550;
    const y = i * random(1, 10) % 550;
    const randomAccForLargeAndMed = random(0.001, 0.002);
    const randomAccForSmall = random(0.0001, 0.0002)
    const [dx, size, acc] = randomStars();
    stars.push(new Star(x, y, dx, 0, size, acc, 255));
    i++;
  }
}

function setup() {
  frameRate(120);
  createCanvas(550, 550);
  createStars();
  // createAsteroids();
}

class Star {
  constructor(x, y, dx, dy, size, acc, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.acc = acc;
    this.orgDx = dx;
    this.color = color;
  }

  update() {
    this.x += this.dx;
    this.dx = this.dx + this.acc;
    this.y += this.dy;
    if (this.dx > 7) {
      this.dx = this.orgDx;
    }
    if (this.y > 550) {
      [this.y, this.x] = [random(0, 10), random(1, 550)];
    }
    if (this.y < 0) {
      [this.y, this.x] = [random(540, 549), random(1, 550)];
    }
    if (this.x > 550) {
      this.x = -20;
    }
  }

  draw() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
}

function draw() {
  background(0);
  stars.forEach((star) => {
    star.update();
    star.draw();
  });
}
