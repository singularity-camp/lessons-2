import { PIECE } from "./types";
import Player from "./Player";
import Bot from "./Bot";
import View from "../view";

const ROW = 3;
const COL = 3;

class Round {
  readonly #view: View;
  readonly #player1: Player;
  readonly #player2: Player;
  #currentPlayer: Player;
  readonly #winner: Player | null;
  readonly #end: boolean;
  readonly #board: PIECE[];

  constructor(
    view: View,
    player1: Player,
    player2: Player,
    isFirtPlayerStarts: boolean
  ) {
    this.#view = view;
    this.#player1 = player1;
    this.#player2 = player2;
    this.#currentPlayer = isFirtPlayerStarts ? this.#player1 : this.#player2;
    this.#winner = null;
    this.#end = false;
    this.#board = new Array(COL * ROW).fill(0);
  }

  get winner() {
    return this.#winner;
  }

  async start() {
    await this.#run();
  }

  async #run() {
    return new Promise(async (res) => {
      while (!this.#end) {
        await this.#playerMove();
        this.#togglePlayer();
      }
    });
  }

  #playerMove() {
    if (this.#currentPlayer instanceof Bot) {
      const ind = this.#currentPlayer.move(this.#board);
    }
  }

  #togglePlayer() {
    this.#currentPlayer =
      this.#currentPlayer === this.#player1 ? this.#player2 : this.#player1;
  }
}

export default Round;
