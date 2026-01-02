class Players {
  #players;
  #currentPlayer;
  #currentPlayerIndex;
  constructor(players) {
    this.#players = players;
    this.#currentPlayerIndex = 0;
    this.#currentPlayer = this.#players[this.#currentPlayerIndex];
    console.log("Welcome");
  }

  #getNextPlayerIndex() {
    this.#currentPlayerIndex = (this.#currentPlayerIndex + 1) %
      this.#players.length;
    return this.#currentPlayerIndex;
  }

  currentPlayer() {
    const currentPlayer = this.#currentPlayer;
    this.nextPlayer();
    return currentPlayer;
  }

  nextPlayer() {
    this.#currentPlayer = this.#players[this.#getNextPlayerIndex()];
  }
}
