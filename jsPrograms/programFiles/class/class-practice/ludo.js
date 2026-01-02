class ludo {
  #current;
  #name;
  constructor(name) {
    console.log("Welcome to ludo");
    this.#current = 0;
    this.#name = name;
  }

  #hasWon() {
    return this.#current > 100;
  }

  increment(move) {
    this.#current += move;
    this.#hasWon();
  }

  move() {
    prompt("Enter to get your move");
    const move = generateMove();
    console.log(`your move: ${move}`);
    console.log({ player: this.#current });
    return move;
  }

  reset() {
    this.#current = 0;
  }

  current() {
    return this.#current;
  }
}

const generateMove = () => Math.floor(Math.random() * 6) + 1;

const play = () => {
  const player = new ludo("Pradipta");
  let computer = 0;
  while (true) {
    const playerMove = player.move();
    player.increment(playerMove);
    if (player.current === computer) computer = 0;
    const moveOfComputer = generateMove();
    computer += moveOfComputer;
    console.log({ computer });
    if (computer === player.current) player.reset();
    if (computer >= 100) break;
  }
  console.log("Computer won");
};

const main = () => {
  play();
};

main();
