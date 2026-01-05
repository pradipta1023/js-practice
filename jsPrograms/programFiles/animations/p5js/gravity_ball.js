class Ball {
  constructor(x, y, dy, acc) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.acc = acc;
    this.orgAcc = acc;
    this.orbit = -1;
  }
  
  draw() {
    circle(this.x, this.y, 10);
  }
  
  update() {
    // this.x += random([0.0001, -0.0001]);
    this.y += this.dy;
    this.dy += this.acc;
    this.acc += 0.0001;
    if (this.y >= 590) {
      this.dy += this.orbit;
      this.dy = -this.dy;
    }
    if (Math.floor(this.dy) === 0 && this.dy === 590) {
      this.acc = 0;
      this.dy = 0;
    };
  }
}

const balls = [];

function setup() {
  createCanvas(600, 600);
  for(let i=1; i<= 28; i++) {
    const dx = random(1, 2);
    const ball = new Ball(i * 20, 10, dx, 0.0001);
    balls.push(ball);
  }
}

function draw() {
  background(0);
  stroke(255);
  line(9, 9, 590, 9);
  line(0, 590, 600, 590);
  balls.forEach((ball)=> {
    ball.update();
    ball.draw();
  })
}