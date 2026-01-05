class Rain {
  constructor(x, y, dy, acc) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.orgDy = dy;
    this.acc = acc;
    this.orgAcc = acc;
    this.orbit = -1;
    this.orgY = y;
  }

  draw() {
    noStroke();
    fill(126, 84, 217);
    circle(this.x, this.y, 3);
  }

  update() {
    this.x = (this.x + 1) % 600;
    this.y += this.dy;
    this.dy += this.acc;
    this.acc += 0.0001;
    if (this.y >= 590) {
      this.acc = this.orgAcc;
      this.dy = this.orgDy;
      this.y = this.orgY;
    }
  }
}

const rains = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 1; i <= 100; i++) {
    const x = random(5, 590);
    const y = random(-500, 0);
    const dy = random(2, 3);
    const rain = new Rain(x, y, dy, 0.0001);
    rains.push(rain);
  }
}

function draw() {
  background(207, 236, 247, 80);
  rains.forEach((rain) => {
    rain.update();
    rain.draw();
  });
}
